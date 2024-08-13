const audioContext = new (window.AudioContext || window.webkitAudioContext)();
let currentStream = null;
let baseTrackBuffers = [];
let baseTrackSource = null;
let bRollBuffers = {};
let bRollSources = {};
let cachedStreams = {}; // Cache for streams

async function loadStreamConfig() {
    const response = await fetch('ambient-stream-config.json');
    const config = await response.json();
    populateStreamSelect(config.streams);
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
    const response = await fetch(file);
    const arrayBuffer = await response.arrayBuffer();
    return audioContext.decodeAudioData(arrayBuffer);
}

async function preloadBaseTrackBuffers(baseTracks, streamName) {
    if (cachedStreams[streamName] && cachedStreams[streamName].baseTrackBuffers) {
        baseTrackBuffers = cachedStreams[streamName].baseTrackBuffers;
    } else {
        baseTrackBuffers = await Promise.all(baseTracks.map(track => loadAudioBuffer(track)));
        cachedStreams[streamName] = { ...cachedStreams[streamName], baseTrackBuffers };
    }
}

async function preloadBrollBuffers(bRoll, streamName) {
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
}

function getPlaybackOffset(duration) {
    const now = Date.now() / 1000; // Get current time in seconds
    return now % duration; // Get the offset within the duration
}

function startPlayback() {
    const { buffer, duration } = concatenateBuffers(baseTrackBuffers);
    baseTrackSource = audioContext.createBufferSource();
    baseTrackSource.buffer = buffer;
    baseTrackSource.loop = true;
    baseTrackSource.connect(audioContext.destination);

    const offset = getPlaybackOffset(duration);
    baseTrackSource.start(0, offset); // Start at the calculated offset
}

function playStream() {
    if (!currentStream || baseTrackBuffers.length === 0) return;

    if (audioContext.state === 'suspended') {
        audioContext.resume().then(() => {
            startPlayback();
        }).catch(error => {
            console.error('Error resuming audio context:', error);
        });
    } else {
        startPlayback();
    }
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
    if (bRollSources[index]) return; // If already playing, do nothing

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

function stopStream() {
    if (baseTrackSource) {
        baseTrackSource.stop();
        baseTrackSource = null;
    }
    Object.keys(bRollSources).forEach(index => stopBroll(index));
}

function resetBrollCheckboxes() {
    const bRollCheckboxes = document.getElementById('bRollCheckboxes');
    const checkboxes = bRollCheckboxes.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => checkbox.checked = false);
}

function resetState() {
    stopStream();
    resetBrollCheckboxes();
    document.getElementById('bRollCheckboxes').style.display = 'none'; // Hide B-roll checkboxes
    // Retain cached buffers
}

function populateBrollCheckboxes(bRoll) {
    const bRollCheckboxes = document.getElementById('bRollCheckboxes');
    bRollCheckboxes.innerHTML = ''; // Clear existing checkboxes

    bRoll.forEach((effect, index) => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `bRollCheckbox${index}`;

        const label = document.createElement('label');
        label.htmlFor = `bRollCheckbox${index}`;
        label.textContent = effect.file.split('/').pop().split('.').shift();

        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                playBroll(bRollBuffers[index], effect.volume, index);
            } else {
                stopBroll(index);
            }
        });

        bRollCheckboxes.appendChild(checkbox);
        bRollCheckboxes.appendChild(label);
    });

    bRollCheckboxes.style.display = 'inline'; // Show B-roll checkboxes
}

document.getElementById('streamSelect').addEventListener('change', async event => {
    const streamName = event.target.value;
    const loadingSpinner = document.getElementById('loadingSpinner');

    if (streamName === 'none') {
        resetState();
        loadingSpinner.style.display = 'none'; // Hide loading spinner
    } else {
        resetState(); // Reset state before loading new stream
        loadingSpinner.style.display = 'block'; // Show loading spinner

        const response = await fetch('ambient-stream-config.json');
        const config = await response.json();
        currentStream = config.streams.find(stream => stream.name === streamName);

        if (currentStream) {
            await preloadBaseTrackBuffers(currentStream.baseTracks, streamName);
            await preloadBrollBuffers(currentStream.bRoll, streamName);
            populateBrollCheckboxes(currentStream.bRoll);
            playStream(); // Ensure audio context is resumed and stream plays automatically
        }

        loadingSpinner.style.display = 'none'; // Hide loading spinner after loading or if the stream isn't found
    }
});

// Resume the audio context on first user interaction, including selection of dropdown
document.getElementById('streamSelect').addEventListener('focus', () => {
    if (audioContext.state === 'suspended') {
        audioContext.resume().catch(error => {
            console.error('Error resuming audio context on focus:', error);
        });
    }
});

window.onload = loadStreamConfig;
