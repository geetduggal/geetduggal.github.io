const playPauseButton = document.getElementById('playPauseButton');
const playIcon = document.getElementById('playIcon');
const stopIcon = document.getElementById('stopIcon');
const streamSelect = document.getElementById('streamSelect');
const volumeControlsContainer = document.getElementById('volumeControls');
const logContainer = document.getElementById('logContainer'); // Logging container

let audioContext = new (window.AudioContext || window.webkitAudioContext)();
let baseTrack = null;
let bRollTrack = null;
let hlsInstance = null;
let bRollHlsInstance = null;
let isPlaying = false;
let baseGainNode = null; // GainNode for base track
let bRollGainNode = null; // GainNode for B-roll track

// Log function to append messages to the page
function logMessage(message) {
    const logEntry = document.createElement('p');
    logEntry.textContent = message;
    logContainer.appendChild(logEntry);
    console.log(message);  // Also log to the console for easier debugging
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

        if (config.streams && config.streams.length > 0) {
            const stream = config.streams[0]; // Only use the first stream for this simplified version
            const option = document.createElement('option');
            option.value = stream.name;
            option.textContent = stream.name;
            streamSelect.appendChild(option);
            logMessage('Dropdown populated with the first stream option');
        } else {
            logMessage('No streams found in the config');
        }
    } catch (error) {
        console.error('Error loading stream options:', error);
        logMessage(`Error loading stream options: ${error}`);
    }
}

function createHLSTrackWithGain(src, loop = false, volume = 1.0) {
    logMessage(`Creating HLS track for src: ${src}`);

    let audio = new Audio();
    let gainNode = audioContext.createGain();
    gainNode.gain.value = volume;
    logMessage(`GainNode created with initial gain value: ${gainNode.gain.value}`);

    let hls = new Hls();
    hls.loadSource(src);
    hls.attachMedia(audio);

    hls.on(Hls.Events.MANIFEST_PARSED, () => {
        logMessage('HLS manifest parsed successfully');
    });

    hls.on(Hls.Events.ERROR, (event, data) => {
        logMessage(`HLS.js error occurred: ${data.type} - ${data.details}`);
        console.error('HLS.js error:', data);
    });

    audio.loop = loop;
    audio.volume = 1.0; // Start with native volume control for initial testing
    logMessage(`Audio element created and loop set to: ${loop}`);

    return { audio, gainNode, hls };
}

function togglePlayPause() {
    if (baseTrack.paused) {
        baseTrack.play().then(() => {
            logMessage('Base track is playing');

            // Connect the GainNode after the track starts playing
            const baseSource = audioContext.createMediaElementSource(baseTrack);
            baseSource.connect(baseGainNode).connect(audioContext.destination);
            logMessage('Connected GainNode to audio context for base track');

            if (bRollTrack) {
                bRollTrack.play().then(() => {
                    logMessage('B-roll track is playing');

                    const bRollSource = audioContext.createMediaElementSource(bRollTrack);
                    bRollSource.connect(bRollGainNode).connect(audioContext.destination);
                    logMessage('Connected GainNode to audio context for B-roll track');
                }).catch(error => {
                    logMessage('Failed to play B-roll track: ' + error.message);
                    console.error('Failed to play B-roll track:', error);
                });
            }

            isPlaying = true;
            updatePlayPauseButton();
            updateMediaSessionState('playing');
        }).catch(error => {
            logMessage('Failed to play base track: ' + error.message);
            console.error('Failed to play base track:', error);
        });
    } else {
        baseTrack.pause();
        if (bRollTrack) bRollTrack.pause();
        logMessage('Base track and B-roll track paused');
        isPlaying = false;
        updatePlayPauseButton();
        updateMediaSessionState('paused');
    }
}

function stopAllTracks() {
    if (baseTrack) {
        baseTrack.pause();
        baseTrack.currentTime = 0;
        logMessage('Stopped base track');
    }

    if (bRollTrack) {
        bRollTrack.pause();
        bRollTrack.currentTime = 0;
        logMessage('Stopped B-roll track');
    }

    isPlaying = false;

    if (hlsInstance) {
        hlsInstance.destroy();
        hlsInstance = null;
    }

    if (bRollHlsInstance) {
        bRollHlsInstance.destroy();
        bRollHlsInstance = null;
    }

    updatePlayPauseButton();
    updateMediaSessionState('paused');
}

function updatePlayPauseButton() {
    playIcon.style.display = isPlaying ? 'none' : 'inline';
    stopIcon.style.display = isPlaying ? 'inline' : 'none';
    logMessage(`Updated play/pause button, isPlaying: ${isPlaying}`);
}

function createVolumeSlider(trackName, gainNode) {
    const label = document.createElement('label');
    label.textContent = `${trackName} Volume`;

    const volumeControl = document.createElement('input');
    volumeControl.type = 'range';
    volumeControl.min = 0;
    volumeControl.max = 1;
    volumeControl.step = 0.1;
    volumeControl.value = gainNode.gain.value;

    volumeControl.addEventListener('input', (e) => {
        gainNode.gain.value = e.target.value;
        logMessage(`${trackName} volume changed to: ${gainNode.gain.value}`);
    });

    volumeControlsContainer.appendChild(label);
    volumeControlsContainer.appendChild(volumeControl);
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
                togglePlayPause();
            }
        });

        navigator.mediaSession.setActionHandler('pause', () => {
            if (isPlaying) {
                togglePlayPause();
            }
        });

        navigator.mediaSession.setActionHandler('seekbackward', (details) => {
            seek(-10);
        });

        navigator.mediaSession.setActionHandler('seekforward', (details) => {
            seek(10);
        });

        logMessage('Media Session actions set up');
    } else {
        logMessage('Media Session API not supported in this browser');
    }
}

function updateMediaSessionState(state) {
    if ('mediaSession' in navigator) {
        navigator.mediaSession.playbackState = state;
        logMessage(`Media session state updated to ${state}`);
    }
}

function seek(seconds) {
    if (baseTrack) {
        const newTime = Math.max(0, Math.min(baseTrack.currentTime + seconds, baseTrack.duration));
        baseTrack.currentTime = newTime;
        logMessage(`Base track seeked to ${newTime}`);
    }
}

playPauseButton.addEventListener('click', () => {
    if (!baseTrack) {
        const streamName = streamSelect.value;
        const streamSrc = `hls/${streamName.toLowerCase()}.m3u8`; // Ensure correct path and case
        const baseTrackObj = createHLSTrackWithGain(streamSrc, true); // Create base track with GainNode
        baseTrack = baseTrackObj.audio;
        baseGainNode = baseTrackObj.gainNode;

        createVolumeSlider('Base Track', baseGainNode); // Add volume slider for base track
        updateMediaSession(streamName); // Setup media session for base track

        // Get B-roll from the stream config
        fetch('ambient-stream-config.json')
            .then(resp => resp.json())
            .then(config => {
                const selectedStream = config.streams.find(stream => stream.name === streamName);
                if (selectedStream && selectedStream.bRolls && selectedStream.bRolls.length > 0) {
                    const bRollSrc = `hls/${selectedStream.bRolls[0].src.replace('aud/', '').replace('.mp3', '.m3u8')}`;
                    const bRollTrackObj = createHLSTrackWithGain(bRollSrc, true, selectedStream.bRolls[0].volume || 1.0);
                    bRollTrack = bRollTrackObj.audio;
                    bRollGainNode = bRollTrackObj.gainNode;

                    createVolumeSlider('B-roll Track', bRollGainNode); // Add volume slider for B-roll track
                    logMessage(`Loaded B-roll track with URL: ${bRollSrc}`);
                }
                togglePlayPause(); // Start playing only when the play button is pressed
            });
    } else {
        togglePlayPause();
    }
});

streamSelect.addEventListener('change', () => {
    if (isPlaying) {
        stopAllTracks();
    }

    volumeControlsContainer.innerHTML = ''; // Clear previous volume controls

    const streamName = streamSelect.value;
    const streamSrc = `hls/${streamName.toLowerCase()}.m3u8`; // Ensure correct path and case
    const baseTrackObj = createHLSTrackWithGain(streamSrc, true); // Simplified config for testing
    baseTrack = baseTrackObj.audio;
    baseGainNode = baseTrackObj.gainNode;

    createVolumeSlider('Base Track', baseGainNode); // Add volume slider for base track
    updateMediaSession(streamName); // Setup media session for base track

    // Get B-roll from the stream config
    fetch('ambient-stream-config.json')
        .then(resp => resp.json())
        .then(config => {
            const selectedStream = config.streams.find(stream => stream.name === streamName);
            if (selectedStream && selectedStream.bRolls && selectedStream.bRolls.length > 0) {
                const bRollSrc = `hls/${selectedStream.bRolls[0].src.replace('aud/', '').replace('.mp3', '.m3u8')}`;
                const bRollTrackObj = createHLSTrackWithGain(bRollSrc, true, selectedStream.bRolls[0].volume || 1.0);
                bRollTrack = bRollTrackObj.audio;
                bRollGainNode = bRollTrackObj.gainNode;

                createVolumeSlider('B-roll Track', bRollGainNode); // Add volume slider for B-roll track
                logMessage(`Loaded B-roll track with URL: ${bRollSrc}`);
            }
            // Do not auto-play, wait for the play button to be pressed
        });
});

window.addEventListener('DOMContentLoaded', () => {
    loadStreamOptions();
});
