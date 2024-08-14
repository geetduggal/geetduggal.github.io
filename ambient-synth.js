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

async function preloadAudio(src) {
    return new Promise((resolve, reject) => {
        const audio = new Audio(src);
        audio.addEventListener('canplaythrough', () => resolve(audio));
        audio.addEventListener('error', () => reject(`Failed to load ${src}`));
    });
}

async function loadConfig(config) {
    // Clear existing volume controls and tracks
    bRollTracks = [];
    volumeControlsContainer.innerHTML = '';

    try {
        // Preload base track
        baseTrack = await preloadAudio(config.baseTrack);
        baseTrack.loop = true;

        // Preload B-roll tracks and create volume controls dynamically
        for (const bRoll of config.bRolls) {
            const audioElement = await preloadAudio(bRoll.src);
            audioElement.loop = bRoll.loop || false;
            audioElement.volume = bRoll.volume || 1.0;
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
                const newVolume = e.target.value;
                audioElement.volume = newVolume;
                
                // Ensure mobile browsers apply the volume change
                audioElement.pause();
                audioElement.play();
            });

            volumeControlsContainer.appendChild(label);
            volumeControlsContainer.appendChild(volumeControl);
        }
    } catch (error) {
        console.error(error);
    }
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
                await loadConfig(selectedConfig);
            }
        } catch (error) {
            console.error('Failed to load stream config:', error);
        }
    }
});

// Load stream options on page load
window.addEventListener('DOMContentLoaded', loadStreamOptions);
