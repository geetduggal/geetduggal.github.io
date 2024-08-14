const audioContext = new (window.AudioContext || window.webkitAudioContext)();
let currentStream = null;
let baseTrackBuffers = [];
let baseTrackSource = null;
let bRollBuffers = {};
let bRollSources = {};
let cachedStreams = {};
let isPlaying = false;

async function loadStreamConfig() {
    try {
        const response = await fetch('ambient-stream-config.json');
        if (!response.ok) throw new Error(`Failed to fetch stream config: ${response.statusText}`);
        const config = await response.json();
        populateStreamSelect(config.streams);
    } catch (error) {
        console.error('Error loading stream config:', error);
    }
}

function populateStreamSelect(streams) {
    const streamSelect = document.getElementById('streamSelect');
    streams.forEach(stream => {
        const option = document.createElement('option');
        option.value = stream.name;
        option.textContent = stream.name;
        streamSelect.appendChild(option);
    });
}

async function loadAudioBuffer(file) {
    try {
        const response = await fetch(file, { mode: 'cors' });
        if (!response.ok) throw new Error(`Failed to fetch audio file: ${response.statusText}`);
        const arrayBuffer = await response.arrayBuffer();
        return await audioContext.decodeAudioData(arrayBuffer);
    } catch (error) {
        console.error('Error loading audio buffer:', error);
        return null;
    }
}

async function preloadBaseTrackBuffers(baseTracks, streamName) {
    try {
        if (cachedStreams[streamName] && cachedStreams[streamName].baseTrackBuffers) {
            baseTrackBuffers = cachedStreams[streamName].baseTrackBuffers;
        } else {
            baseTrackBuffers = await Promise.all(baseTracks.map(track => loadAudioBuffer(track)));
            cachedStreams[streamName] = { ...cachedStreams[streamName], baseTrackBuffers };
        }
    } catch (error) {
        console.error('Error preloading base track buffers:', error);
    }
}

async function preloadBrollBuffers(bRoll, streamName) {
    try {
        if (cachedStreams[streamName] && cachedStreams[streamName].bRollBuffers) {
            bRollBuffers = cachedStreams[streamName].bRollBuffers;
        } else {
            const bufferPromises = bRoll.map(effect => loadAudioBuffer(effect.file));
            const buffers = await Promise.all(bufferPromises);
            bRoll.forEach((effect, index) => {
                bRollBuffers[index] = buffers[index];
            });
            cachedStreams[streamName] = { ...cachedStreams[streamName], bRollBuffers };
        }
    } catch (error) {
        console.error('Error preloading B-roll buffers:', error);
    }
}

function getPlaybackOffset(duration) {
    const now = Date.now() / 1000; // Get current time in seconds
    return now % duration; // Get the offset within the duration
}

function startPlayback() {
    try {
        const { buffer, duration } = concatenateBuffers(baseTrackBuffers);
        baseTrackSource = audioContext.createBufferSource();
        baseTrackSource.buffer = buffer;
        baseTrackSource.loop = true;
        baseTrackSource.connect(audioContext.destination);

        const offset = getPlaybackOffset(duration);
        baseTrackSource.start(0, offset); // Start at the calculated offset
    } catch (error) {
        console.error('Error starting playback:', error);
    }
}

function playStream() {
    if (!currentStream || baseTrackBuffers.length === 0) return;

    if (audioContext.state === 'suspended' || audioContext.state === 'interrupted') {
        audioContext.resume().then(() => {
            startPlayback();
            isPlaying = true;
            playActiveBroll();
            updatePlayPauseButton();
        }).catch(error => {
            console.error('Error resuming audio context:', error);
        });
    } else {
        startPlayback();
        isPlaying = true;
        playActiveBroll();
        updatePlayPauseButton();
    }
}

function stopStream() {
    if (baseTrackSource) {
        baseTrackSource.stop();
        baseTrackSource = null;
    }
    Object.keys(bRollSources).forEach(index => stopBroll(index));
    isPlaying = false;
    updatePlayPauseButton();
}

function togglePlayback() {
    if (isPlaying) {
        stopStream();
    } else {
        if (document.getElementById('streamSelect').value !== 'none') {
            playStream();
        }
    }
}

function playActiveBroll() {
    const bRollCheckboxes = document.getElementById('bRollCheckboxes');
    const checkboxes = bRollCheckboxes.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            playBroll(bRollBuffers[index], 1.0, index); // Adjust volume as needed
        }
    });
}

function concatenateBuffers(buffers) {
    const totalDuration = buffers.reduce((acc, buffer) => acc + buffer.duration, 0);
    const outputBuffer = audioContext.createBuffer(
        buffers[0].numberOfChannels,
        totalDuration * audioContext.sampleRate,
        audioContext.sampleRate
    );

    let offset = 0;
    buffers.forEach(buffer => {
        for (let channel = 0; channel < buffer.numberOfChannels; channel++) {
            outputBuffer.getChannelData(channel).set(buffer.getChannelData(channel), offset);
        }
        offset += buffer.length;
    });

    return { buffer: outputBuffer, duration: totalDuration };
}

function playBroll(buffer, volume, index) {
    if (bRollSources[index]) return;

    const source = audioContext.createBufferSource();
    source.buffer = buffer;
    const gainNode = audioContext.createGain();
    gainNode.gain.value = volume;
    source.connect(gainNode).connect(audioContext.destination);
    source.loop = true;
    source.start(0);
    bRollSources[index] = source;
}

function stopBroll(index) {
    if (bRollSources[index]) {
        bRollSources[index].stop();
        delete bRollSources[index];
    }
}

function resetBrollCheckboxes() {
    const bRollCheckboxes = document.getElementById('bRollCheckboxes');
    const checkboxes = bRollCheckboxes.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => checkbox.checked = false);
}

function resetState() {
    stopStream();
    resetBrollCheckboxes();
    document.getElementById('bRollCheckboxes').style.display = 'none';
}

function populateBrollCheckboxes(bRoll) {
    const bRollCheckboxes = document.getElementById('bRollCheckboxes');
    bRollCheckboxes.innerHTML = '';

    bRoll.forEach((effect, index) => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `bRollCheckbox${index}`;

        const label = document.createElement('label');
        label.htmlFor = `bRollCheckbox${index}`;
        label.textContent = effect.file.split('/').pop().split('.').shift();

        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                if (isPlaying) {
                    playBroll(bRollBuffers[index], effect.volume, index);
                }
            } else {
                stopBroll(index);
            }
        });

        bRollCheckboxes.appendChild(checkbox);
        bRollCheckboxes.appendChild(label);
    });

    bRollCheckboxes.style.display = 'inline';
}

function updatePlayPauseButton() {
    const playPauseButton = document.getElementById('playPauseButton');
    if (isPlaying) {
        playPauseButton.classList.remove('play');
        playPauseButton.classList.add('stop');
    } else {
        playPauseButton.classList.remove('stop');
        playPauseButton.classList.add('play');
    }
}

document.getElementById('playPauseButton').addEventListener('click', togglePlayback);

document.getElementById('streamSelect').addEventListener('change', async event => {
    const streamName = event.target.value;
    const loadingSpinner = document.getElementById('loadingSpinner');

    if (streamName === 'none') {
        resetState();
        loadingSpinner.style.display = 'none';
    } else {
        resetState();
        loadingSpinner.style.display = 'block';

        const response = await fetch('ambient-stream-config.json');
        if (!response.ok) {
            console.error('Failed to load stream config:', response.statusText);
            return;
        }
        const config = await response.json();
        currentStream = config.streams.find(stream => stream.name === streamName);

        if (currentStream) {
            await preloadBaseTrackBuffers(currentStream.baseTracks, streamName);
            await preloadBrollBuffers(currentStream.bRoll, streamName);
            populateBrollCheckboxes(currentStream.bRoll);
            // Play automatically if the play button was already pressed
            if (isPlaying) {
                playStream();
            }
        }

        loadingSpinner.style.display = 'none';
    }
});

function updatePlayPauseButton() {
    const playPauseButton = document.getElementById('playPauseButton');
    const playIcon = document.getElementById('playIcon');
    const stopIcon = document.getElementById('stopIcon');

    if (isPlaying) {
        playPauseButton.classList.remove('play');
        playPauseButton.classList.add('stop');
        playIcon.style.display = 'none';
        stopIcon.style.display = 'inline';
    } else {
        playPauseButton.classList.remove('stop');
        playPauseButton.classList.add('play');
        stopIcon.style.display = 'none';
        playIcon.style.display = 'inline';
    }
}


window.onload = loadStreamConfig;
