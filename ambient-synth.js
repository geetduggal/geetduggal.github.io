const playPauseButton = document.getElementById('playPauseButton');
const playIcon = document.getElementById('playIcon');
const stopIcon = document.getElementById('stopIcon');
const streamSelect = document.getElementById('streamSelect');
const bRollControlsContainer = document.getElementById('bRollControls');
const loadingSpinner = document.getElementById('loadingSpinner');

const baseTrack = document.getElementById('baseTrack');
let bRollTracks = [];

let isPlaying = false;

function loadConfig(config) {
    // Clear existing B-roll controls
    bRollTracks = [];
    bRollControlsContainer.innerHTML = '';

    // Set base track
    baseTrack.src = config.baseTrack;

    // Create B-roll controls dynamically
    config.bRolls.forEach((bRoll, index) => {
        const audioElement = document.createElement('audio');
        audioElement.src = bRoll.src;
        audioElement.loop = bRoll.loop || false;
        audioElement.volume = bRoll.volume || 1.0;
        bRollTracks.push(audioElement);

        // Create controls for each B-roll
        const controlDiv = document.createElement('div');
        controlDiv.className = 'b-roll-control';

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
        });

        const loopControl = document.createElement('input');
        loopControl.type = 'checkbox';
        loopControl.checked = audioElement.loop;
        loopControl.addEventListener('change', (e) => {
            audioElement.loop = e.target.checked;
        });

        controlDiv.appendChild(label);
        controlDiv.appendChild(volumeControl);
        controlDiv.appendChild(loopControl);
        bRollControlsContainer.appendChild(controlDiv);
    });
}

function playAllTracks() {
    baseTrack.play();
    bRollTracks.forEach(track => track.play());
    isPlaying = true;
    updatePlayPauseButton();
}

function stopAllTracks() {
    baseTrack.pause();
    bRollTracks.forEach(track => track.pause());
    baseTrack.currentTime = 0;
    bRollTracks.forEach(track => track.currentTime = 0);
    isPlaying = false;
    updatePlayPauseButton();
}

function updatePlayPauseButton() {
    if (isPlaying) {
        playIcon.style.display = 'none';
        stopIcon.style.display = 'inline';
    } else {
        stopIcon.style.display = 'none';
        playIcon.style.display = 'inline';
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
        stopAllTracks();
    } else {
        loadingSpinner.style.display = 'block';
        try {
            const response = await fetch('ambient-stream-config.json');
            const config = await response.json();
            const selectedConfig = config.streams.find(stream => stream.name === streamName);
            if (selectedConfig) {
                loadConfig(selectedConfig);
            }
        } catch (error) {
            console.error('Failed to load stream config:', error);
        } finally {
            loadingSpinner.style.display = 'none';
        }
    }
});
