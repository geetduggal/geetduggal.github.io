const playPauseButton = document.getElementById('playPauseButton');
const playIcon = document.getElementById('playIcon');
const stopIcon = document.getElementById('stopIcon');
const streamSelect = document.getElementById('streamSelect');
const volumeControlsContainer = document.getElementById('volumeControls');

let audioContext = new (window.AudioContext || window.webkitAudioContext)();
let baseTrack = null;
let bRollTracks = [];
let bRollTrackWorkers = [];
let isPlaying = false;

// Load stream options
async function loadStreamOptions() {
    try {
        const response = await fetch('ambient-stream-config.json');
        const config = await response.json();

        config.streams.forEach(stream => {
            const option = document.createElement('option');
            option.value = stream.name;
            option.textContent = stream.name;
            streamSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Error loading stream options:', error);
    }
}

// Calculate playback offset
function calculatePlaybackOffset(duration) {
    const currentTime = Date.now() / 1000; // Current time in seconds
    return currentTime % duration; // Offset time within the track duration
}

// Load the configuration and set up the audio context
function loadConfig(config) {
    // Terminate existing workers and stop current tracks
    if (baseTrack) baseTrack.mediaElement.pause();
    bRollTracks.forEach(track => track.mediaElement.pause());
    bRollTrackWorkers.forEach(worker => worker.terminate());

    bRollTracks = [];
    bRollTrackWorkers = [];
    volumeControlsContainer.innerHTML = '';

    // Create and configure the base track
    baseTrack = createTrack(config.baseTrack, true);

    // Create B-roll tracks and volume controls dynamically
    config.bRolls.forEach(bRoll => {
        const bRollTrack = createTrack(bRoll.src, false, bRoll.volume || 1.0);
        bRollTracks.push(bRollTrack);

        // Create volume controls for each B-roll
        const label = document.createElement('label');
        label.textContent = bRoll.name;

        const volumeControl = document.createElement('input');
        volumeControl.type = 'range';
        volumeControl.min = 0;
        volumeControl.max = 1;
        volumeControl.step = 0.1;
        volumeControl.value = bRoll.volume || 1.0;

        // Update volume via the Web Worker
        volumeControl.addEventListener('input', (e) => {
            bRollTrack.worker.postMessage({ type: 'volume', value: e.target.value });
        });

        volumeControlsContainer.appendChild(label);
        volumeControlsContainer.appendChild(volumeControl);
    });

    updateMediaSession(config.name);
}

function createTrack(src, isBase, initialVolume = 1.0) {
    const mediaElement = new Audio(src);
    mediaElement.loop = true;

    const trackSource = audioContext.createMediaElementSource(mediaElement);
    const gainNode = audioContext.createGain();
    gainNode.gain.value = initialVolume;

    trackSource.connect(gainNode).connect(audioContext.destination);

    // Create a Web Worker for controlling playback timing and volume
    const worker = new Worker('audioProcessor.js');
    worker.postMessage({
        type: 'init',
        duration: mediaElement.duration,
        isBase: isBase,
    });

    // Handle playback commands from the worker
    worker.onmessage = function (e) {
        const data = e.data;
        if (data.type === 'play') {
            mediaElement.currentTime = data.offset || 0;
            mediaElement.play();
        } else if (data.type === 'stop') {
            mediaElement.pause();
        } else if (data.type === 'volume') {
            gainNode.gain.value = data.value;
        }
    };

    return { mediaElement, worker };
}

// Play all tracks
function playAllTracks() {
    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }

    baseTrack.worker.postMessage({ type: 'play' });
    bRollTracks.forEach(track => track.worker.postMessage({ type: 'play' }));

    isPlaying = true;
    updatePlayPauseButton();
}

// Stop all tracks
function stopAllTracks() {
    baseTrack.worker.postMessage({ type: 'stop' });
    bRollTracks.forEach(track => track.worker.postMessage({ type: 'stop' }));

    isPlaying = false;
    updatePlayPauseButton();
}

// Update the play/pause button
function updatePlayPauseButton() {
    playIcon.style.display = isPlaying ? 'none' : 'inline';
    stopIcon.style.display = isPlaying ? 'inline' : 'none';
}

// Event listeners
playPauseButton.addEventListener('click', () => {
    if (isPlaying) {
        stopAllTracks();
    } else {
        playAllTracks();
    }
});

streamSelect.addEventListener('change', async () => {
    const streamName = streamSelect.value;  // Ensure streamName is initialized here
    if (streamName === 'none') {
        stopAllTracks();
        volumeControlsContainer.innerHTML = ''; // Remove all volume controls
    } else {
        try {
            const response = await fetch('ambient-stream-config.json');
            const config = await response.json();
            const selectedConfig = config.streams.find(stream => stream.name === streamName);
            if (selectedConfig) {
                loadConfig(selectedConfig);
            }
        } catch (error) {
            console.error('Failed to load stream config:', error);
        }
    }
});

// Load stream options on page load
window.addEventListener('DOMContentLoaded', loadStreamOptions);

// Media Session API for system controls
function updateMediaSession(streamName) {
    if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
            title: streamName,
            artist: 'Ambient Synth',
            album: 'Ambient Streams',
            artwork: [
                { src: 'icon-128x128.png', sizes: '128x128', type: 'image/png' },
                { src: 'icon-256x256.png', sizes: '256x256', type: 'image/png' }
            ]
        });

        navigator.mediaSession.setActionHandler('play', playAllTracks);
        navigator.mediaSession.setActionHandler('pause', stopAllTracks);
        navigator.mediaSession.setActionHandler('stop', stopAllTracks);
    }
}
