const playPauseButton = document.getElementById('playPauseButton');
const playIcon = document.getElementById('playIcon');
const stopIcon = document.getElementById('stopIcon');
const streamSelect = document.getElementById('streamSelect');
const volumeControlsContainer = document.getElementById('volumeControls');
const logContainer = document.getElementById('logContainer'); // Logging container

let baseTrack = null;
let bRollTracks = [];
let isPlaying = false;
let hlsInstances = [];
let consistentTimestamp = 0; // This will store the consistent timestamp
let baseTrackDuration = NaN; // Store the duration of the base track

// Log function to append messages to the page
function logMessage(message) {
    const logEntry = document.createElement('p');
    logEntry.textContent = message;
    logContainer.appendChild(logEntry);
}

async function fetchConsistentTimestamp() {
    consistentTimestamp = Date.now() / 1000;
    logMessage(`Fetched consistent timestamp (local): ${consistentTimestamp}`);
    return;
    try {
        const response = await fetch('https://worldtimeapi.org/api/timezone/Etc/UTC');
        const data = await response.json();
        consistentTimestamp = new Date(data.utc_datetime).getTime() / 1000; // Convert to seconds
        logMessage(`Fetched consistent timestamp (external): ${consistentTimestamp}`);
    } catch (error) {
        console.error('Failed to fetch consistent timestamp:', error);
        logMessage('Failed to fetch consistent timestamp, using local time');
        consistentTimestamp = Date.now() / 1000;
    }
}

async function loadStreamOptions() {
    try {
        logMessage('Fetching stream options...');
        const response = await fetch('ambient-stream-config.json');

        if (!response.ok) {
            console.error('Failed to load stream options:', response.statusText);
            logMessage(`Failed to load stream options: ${response.statusText}`);
            return;
        }

        const config = await response.json();
        logMessage('Stream config loaded');

        if (!config.streams || config.streams.length === 0) {
            console.warn('No streams found in the config');
            logMessage('No streams found in the config');
            return;
        }

        config.streams.forEach(stream => {
            const option = document.createElement('option');
            option.value = stream.name;
            option.textContent = stream.name;
            streamSelect.appendChild(option);
        });

        logMessage('Dropdown populated with stream options');
    } catch (error) {
        console.error('Error loading stream options:', error);
        logMessage(`Error loading stream options: ${error}`);
    }
}

function createAudioElement(src, loop = false, volume = 1.0) {
    let audio = new Audio();

    if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(audio);
        hlsInstances.push(hls);

        hls.on(Hls.Events.LEVEL_LOADED, (event, data) => {
            baseTrackDuration = data.details.totalduration;
            logMessage(`HLS LEVEL_LOADED: duration set to ${baseTrackDuration} seconds for ${src}`);
            setAudioCurrentTime(audio);
        });

        hls.on(Hls.Events.ERROR, (event, data) => {
            console.error('HLS.js error:', data);
            logMessage(`HLS.js error: ${data.details}`);
        });
    } else if (audio.canPlayType('application/vnd.apple.mpegurl')) {
        // Safari or other browsers with native HLS support
        audio.src = src;
        audio.addEventListener('loadedmetadata', () => {
            baseTrackDuration = audio.duration;
            logMessage(`Native HLS loaded: duration set to ${baseTrackDuration} seconds for ${src}`);
            setAudioCurrentTime(audio);
        });
    } else {
        console.error('HLS is not supported on this browser.');
        logMessage('HLS is not supported on this browser.');
    }

    audio.loop = loop;
    audio.volume = volume;
    return audio;
}

function setAudioCurrentTime(audioElement) {
    if (!isNaN(baseTrackDuration)) {
        const offset = calculatePlaybackOffset(baseTrackDuration);
        audioElement.currentTime = offset;
        logMessage(`Set audio currentTime to: ${offset} (Duration: ${baseTrackDuration})`);
    } else {
        logMessage('Unable to set currentTime, duration is NaN');
    }
}

function loadConfig(config) {
    stopAllTracks(true);
    bRollTracks = [];
    volumeControlsContainer.innerHTML = '';

    const baseTrackSrc = `hls/${config.baseTrack.replace('aud/', '').replace('.mp3', '.m3u8')}`;
    baseTrack = createAudioElement(baseTrackSrc, true);

    config.bRolls.forEach(bRoll => {
        const bRollSrc = `hls/${bRoll.src.replace('aud/', '').replace('.mp3', '.m3u8')}`;
        const audioElement = createAudioElement(bRollSrc, true, bRoll.volume);
        bRollTracks.push(audioElement);

        const label = document.createElement('label');
        label.textContent = bRoll.name;

        const volumeControl = document.createElement('input');
        volumeControl.type = 'range';
        volumeControl.min = 0;
        volumeControl.max = 1;
        volumeControl.step = 0.1;
        volumeControl.value = audioElement.volume;

        volumeControl.addEventListener('input', (e) => {
            audioElement.volume = e.target.value;
            logMessage(`Volume changed for ${bRoll.name}: ${e.target.value}`);
        });

        volumeControlsContainer.appendChild(label);
        volumeControlsContainer.appendChild(volumeControl);
    });

    updateMediaSession(config.name);
}

function calculatePlaybackOffset(duration) {
    const offset = consistentTimestamp % duration;
    logMessage(`Calculated playback offset: ${offset} (Duration: ${duration}, Timestamp: ${consistentTimestamp})`);
    return offset; // Offset time within the track duration
}

function playAllTracks() {
    if (baseTrack) {
        setAudioCurrentTime(baseTrack); // Ensure it always starts at the correct offset
        baseTrack.play();
        logMessage('Playing base track');
    }

    bRollTracks.forEach(track => {
        setAudioCurrentTime(track); // Ensure it always starts at the correct offset
        track.play();
        logMessage('Playing B-roll track');
    });

    isPlaying = true;
    updatePlayPauseButton();
    updateMediaSessionState('playing');
}

function stopAllTracks(clearTracks = false) {
    if (baseTrack) {
        baseTrack.pause();
        baseTrack.currentTime = 0;
        logMessage('Stopped base track');
    }
    bRollTracks.forEach(track => {
        track.pause();
        track.currentTime = 0;
        logMessage('Stopped B-roll track');
    });

    isPlaying = false;
    updatePlayPauseButton();

    if (clearTracks) {
        baseTrack = null;
        bRollTracks = [];

        hlsInstances.forEach(hls => hls.destroy());
        hlsInstances = [];
    }

    updateMediaSessionState('paused');
}

function updatePlayPauseButton() {
    playIcon.style.display = isPlaying ? 'none' : 'inline';
    stopIcon.style.display = isPlaying ? 'inline' : 'none';
    logMessage(`Updated play/pause button, isPlaying: ${isPlaying}`);
}

function updateMediaSession(streamName) {
    if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
            title: streamName,
            artist: 'Ambient Synth',
            album: 'Ambient Streams',
            artwork: [
                { src: 'img/logo-128x128.png', sizes: '128x128', type: 'image/png' },
                { src: 'img/logo-256x256.png', sizes: '256x256', type: 'image/png' }
            ]
        });

        navigator.mediaSession.setActionHandler('play', () => {
            if (!isPlaying) {
                playAllTracks();
            }
        });
        navigator.mediaSession.setActionHandler('pause', () => {
            if (isPlaying) {
                stopAllTracks();
            }
        });
        navigator.mediaSession.setActionHandler('seekbackward', () => {
            moveStream(-1);
        });
        navigator.mediaSession.setActionHandler('seekforward', () => {
            moveStream(1);
        });

        logMessage('Media Session actions set up');
    } else {
        console.warn('Media Session API not supported');
        logMessage('Media Session API not supported');
    }
}

function updateMediaSessionState(state) {
    if ('mediaSession' in navigator) {
        navigator.mediaSession.playbackState = state;
        logMessage(`Media session state updated to ${state}`);
    }
}

function moveStream(direction) {
    const currentIndex = streamSelect.selectedIndex;
    const newIndex = Math.min(Math.max(0, currentIndex + direction), streamSelect.options.length - 1);

    if (newIndex !== currentIndex) {
        streamSelect.selectedIndex = newIndex;
        streamSelect.dispatchEvent(new Event('change'));
        logMessage(`Moved stream selection by ${direction}, newIndex: ${newIndex}`);
    }
}

playPauseButton.addEventListener('click', () => {
    if (isPlaying) {
        stopAllTracks();
    } else {
        playAllTracks();
    }
});

streamSelect.addEventListener('change', async () => {
    const streamName = streamSelect.value;
    if (streamName === 'none') {
        stopAllTracks(true);
        volumeControlsContainer.innerHTML = ''; // Remove all volume controls
        logMessage('Stopped all tracks and cleared volume controls');
    } else {
        try {
            logMessage(`Loading config for stream: ${streamName}`);
            const response = await fetch('ambient-stream-config.json');
            const config = await response.json();
            const selectedConfig = config.streams.find(stream => stream.name === streamName);
            if (selectedConfig) {
                await fetchConsistentTimestamp(); // Fetch consistent timestamp before playing
                loadConfig(selectedConfig);
            } else {
                logMessage(`Stream config not found for stream: ${streamName}`);
            }
        } catch (error) {
            console.error('Failed to load stream config:', error);
            logMessage(`Failed to load stream config: ${error}`);
        }
    }
});

window.addEventListener('DOMContentLoaded', async () => {
    await fetchConsistentTimestamp(); // Fetch consistent timestamp on page load
    loadStreamOptions();
});
