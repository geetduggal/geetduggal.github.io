const playPauseButton = document.getElementById('playPauseButton');
const playIcon = document.getElementById('playIcon');
const stopIcon = document.getElementById('stopIcon');
const streamSelect = document.getElementById('streamSelect');
const useBackendCheckbox = document.getElementById('useBackendCheckbox');
const volumeControlsContainer = document.getElementById('volumeControls');

let baseTrack = null;
let bRollTracks = [];
let isPlaying = false;
let currentStreamConfig = null;
let useBackend = false;

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

        // Automatically select the first stream if available
        if (config.streams.length > 0) {
            streamSelect.value = config.streams[0].name;
            loadSelectedStream();
        }
    } catch (error) {
        console.error('Error loading stream options:', error);
    }
}

function loadSelectedStream() {
    const streamName = streamSelect.value;
    if (streamName === 'none') {
        stopAllTracks();
        volumeControlsContainer.innerHTML = ''; // Remove all volume controls
    } else {
        fetch('ambient-stream-config.json')
            .then(response => response.json())
            .then(config => {
                const selectedConfig = config.streams.find(stream => stream.name === streamName);
                if (selectedConfig) {
                    currentStreamConfig = selectedConfig;
                    setupVolumeControls(selectedConfig);
                    playStream(selectedConfig);
                }
            })
            .catch(error => {
                console.error('Failed to load stream config:', error);
            });
    }
}

function setupVolumeControls(config) {
    volumeControlsContainer.innerHTML = ''; // Clear previous controls

    config.bRolls.forEach(bRoll => {
        const label = document.createElement('label');
        label.textContent = bRoll.name;

        const volumeControl = document.createElement('input');
        volumeControl.type = 'range';
        volumeControl.min = 0;
        volumeControl.max = 1;
        volumeControl.step = 0.1;
        volumeControl.value = bRoll.volume;
        volumeControl.dataset.name = bRoll.name; // Associate slider with the B-roll name

        volumeControl.addEventListener('input', (e) => {
            bRollTracks.forEach(track => {
                if (track.dataset.name === bRoll.name) {
                    track.volume = e.target.value;
                }
            });
        });

        volumeControlsContainer.appendChild(label);
        volumeControlsContainer.appendChild(volumeControl);
    });
}

function playStream(config) {
    stopAllTracks();

    if (useBackend) {
        // Use HLS files directly from the local hls/ directory, remove 'aud/' prefix
        const baseTrackSrc = config.baseTrack.replace('aud/', '');
        baseTrack = createAudioElement(baseTrackSrc, true);
        baseTrack.play();

        config.bRolls.forEach(bRoll => {
            const bRollSrc = bRoll.src.replace('aud/', '');
            const audioElement = createAudioElement(bRollSrc, true, bRoll.volume);
            audioElement.dataset.name = bRoll.name; // Store the track name for volume control
            bRollTracks.push(audioElement);
            audioElement.play();
        });
    } else {
        // Original client-side behavior, keep 'aud/' prefix
        const baseTrackSrc = config.baseTrack;
        baseTrack = createAudioElement(baseTrackSrc, true);
        baseTrack.play();

        config.bRolls.forEach(bRoll => {
            const bRollSrc = bRoll.src;
            const audioElement = createAudioElement(bRollSrc, true, bRoll.volume);
            audioElement.dataset.name = bRoll.name; // Store the track name for volume control
            bRollTracks.push(audioElement);
            audioElement.play();
        });
    }

    // Call setupVolumeControls to ensure volume sliders are displayed and functional
    setupVolumeControls(config);

    isPlaying = true;
    updatePlayPauseButton();
    updateMediaSession(config.name);
}

function createAudioElement(src, loop = false, volume = 1.0) {
    let audio;
    if (useBackend) {
        // Modify the URL to point to the HLS stream in the local hls/ directory
        const hlsUrl = `hls/${src.replace('.mp3', '.m3u8')}`;
        audio = new Audio(hlsUrl);
    } else {
        audio = new Audio(src);
    }
    audio.loop = loop;
    audio.volume = volume;
    return audio;
}

function stopAllTracks() {
    if (baseTrack) {
        baseTrack.pause();
        baseTrack.currentTime = 0;
        baseTrack = null;
    }
    bRollTracks.forEach(track => {
        track.pause();
        track.currentTime = 0;
    });
    bRollTracks = [];

    isPlaying = false;
    updatePlayPauseButton();
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
                { src: 'img/logo-128x128.png', sizes: '128x128', type: 'image/png' },
                { src: 'img/logo-256x256.png', sizes: '256x256', type: 'image/png' }
            ]
        });

        navigator.mediaSession.setActionHandler('play', () => {
            if (!isPlaying) {
                playStream(currentStreamConfig);
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

function seek(seconds) {
    if (baseTrack) {
        const newTime = Math.max(0, Math.min(baseTrack.currentTime + seconds, baseTrack.duration));
        baseTrack.currentTime = newTime;
    }
}

playPauseButton.addEventListener('click', () => {
    if (isPlaying) {
        stopAllTracks();
    } else if (currentStreamConfig) {
        playStream(currentStreamConfig);
    }
});

streamSelect.addEventListener('change', loadSelectedStream);

useBackendCheckbox.addEventListener('change', () => {
    useBackend = useBackendCheckbox.checked;
    if (isPlaying && currentStreamConfig) {
        playStream(currentStreamConfig);
    }
});

// Load stream options on page load
window.addEventListener('DOMContentLoaded', loadStreamOptions);
