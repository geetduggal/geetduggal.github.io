const playPauseButton = document.getElementById('playPauseButton');
const playIcon = document.getElementById('playIcon');
const stopIcon = document.getElementById('stopIcon');
const streamSelect = document.getElementById('streamSelect');
const volumeControlsContainer = document.getElementById('volumeControls');

let baseTrack = null;
let bRollTracks = [];
let isPlaying = false;

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
    // Clear existing volume controls and tracks
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

        // Create volume controls for each B-roll
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
    });
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
}

function stopAllTracks() {
    if (baseTrack) {
        baseTrack.pause();
    }
    bRollTracks.forEach(track => {
        track.pause();
    });

    isPlaying = false;
    updatePlayPauseButton();
}

function updatePlayPauseButton() {
    playIcon.style.display = isPlaying ? 'none' : 'inline';
    stopIcon.style.display = isPlaying ? 'inline' : 'none';
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
