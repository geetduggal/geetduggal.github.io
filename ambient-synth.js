const playPauseButton = document.getElementById('playPauseButton');
const playIcon = document.getElementById('playIcon');
const stopIcon = document.getElementById('stopIcon');
const streamSelect = document.getElementById('streamSelect');
const volumeControlsContainer = document.getElementById('volumeControls');

let baseTrack = null;
let bRollTracks = [];
let isPlaying = false;

// Function to detect if the user is on a mobile device
function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

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

function calculatePlaybackOffset(duration) {
    const currentTime = Date.now() / 1000; // Current time in seconds
    return currentTime % duration; // Offset time within the track duration
}

function loadConfig(config) {
    // Stop and clear all existing tracks
    stopAllTracks(true);
    bRollTracks = [];
    volumeControlsContainer.innerHTML = '';

    // Create and configure the base track
    baseTrack = new Audio(config.baseTrack);
    baseTrack.loop = true;

    baseTrack.addEventListener('loadedmetadata', () => {
        const offset = calculatePlaybackOffset(baseTrack.duration);
        baseTrack.currentTime = offset;
    });

    // Create B-roll tracks and volume controls dynamically
    config.bRolls.forEach(bRoll => {
        const audioElement = new Audio(bRoll.src);
        audioElement.loop = bRoll.loop || false;
        audioElement.volume = bRoll.volume || 1.0;

        audioElement.addEventListener('loadedmetadata', () => {
            const offset = calculatePlaybackOffset(audioElement.duration);
            audioElement.currentTime = offset;
        });

        bRollTracks.push(audioElement);

        // Create volume controls for each B-roll if not on a mobile device
        if (!isMobileDevice()) {
            const label = document.createElement('label');
            label.textContent = bRoll.name;

            const volumeControl = document.createElement('input');
            volumeControl.type = 'range';
            volumeControl.min = 0;
            volumeControl.max = 1;
            volumeControl.step = 0.1;
            volumeControl.value = audioElement.volume;

            // Add event listener for volume changes
            volumeControl.addEventListener('input', (e) => {
                audioElement.volume = e.target.value;
            });

            volumeControlsContainer.appendChild(label);
            volumeControlsContainer.appendChild(volumeControl);
        }
    });

    // Update Media Session metadata
    updateMediaSession(config.name);
}

function playAllTracks() {
    if (baseTrack) {
        baseTrack.play();
    }

    bRollTracks.forEach(track => {
        track.play();
    });

    isPlaying = true;
    updatePlayPauseButton();
    updateMediaSessionState('playing');
}

function stopAllTracks(clearTracks = false) {
    if (baseTrack) {
        baseTrack.pause();
        baseTrack.currentTime = 0;
    }
    bRollTracks.forEach(track => {
        track.pause();
        track.currentTime = 0;
    });

    isPlaying = false;
    updatePlayPauseButton();

    if (clearTracks) {
        baseTrack = null;
        bRollTracks = [];
    }

    updateMediaSessionState('paused');
}

function updatePlayPauseButton() {
    playIcon.style.display = isPlaying ? 'none' : 'inline';
    stopIcon.style.display = isPlaying ? 'inline' : 'none';
}

function updateMediaSession(streamName) {
    if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
            title: streamName,
            artist: 'Ambient Synth',
            album: 'Ambient Streams',
            artwork: [
                { src: 'https://via.placeholder.com/128', sizes: '128x128', type: 'image/png' },
                { src: 'https://via.placeholder.com/256', sizes: '256x256', type: 'image/png' }
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
            seek(-10);
        });
        navigator.mediaSession.setActionHandler('seekforward', () => {
            seek(10);
        });

        console.log('Media Session actions set up');
    } else {
        console.warn('Media Session API not supported');
    }
}

function updateMediaSessionState(state) {
    if ('mediaSession' in navigator) {
        navigator.mediaSession.playbackState = state;
        console.log(`Media session state updated to ${state}`);
    }
}

function seek(seconds) {
    const newTime = Math.max(0, Math.min(baseTrack.currentTime + seconds, baseTrack.duration));
    baseTrack.currentTime = newTime;
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
