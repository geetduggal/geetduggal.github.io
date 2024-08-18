const playPauseButton = document.getElementById('playPauseButton');
const playIcon = document.getElementById('playIcon');
const stopIcon = document.getElementById('stopIcon');
const streamSelect = document.getElementById('streamSelect');
const volumeControlsContainer = document.getElementById('volumeControls');

let baseTrack = null;
let bRollTracks = [];
let isPlaying = false;
let hlsInstances = [];
let consistentTimestamp = 0; // This will store the consistent timestamp

// Fetch consistent timestamp from an external source
async function fetchConsistentTimestamp() {
    try {
        const response = await fetch('https://worldtimeapi.org/api/timezone/Etc/UTC');
        const data = await response.json();
        consistentTimestamp = new Date(data.utc_datetime).getTime() / 1000; // Convert to seconds
        console.log('Fetched consistent timestamp:', consistentTimestamp);
    } catch (error) {
        console.error('Failed to fetch consistent timestamp:', error);
        // Fallback to local timestamp if external fetch fails
        consistentTimestamp = Date.now() / 1000;
    }
}

async function loadStreamOptions() {
    try {
        console.log('Fetching stream options...');
        const response = await fetch('ambient-stream-config.json');
        
        if (!response.ok) {
            console.error('Failed to load stream options:', response.statusText);
            return;
        }

        const config = await response.json();
        console.log('Stream config loaded:', config);

        if (!config.streams || config.streams.length === 0) {
            console.warn('No streams found in the config');
            return;
        }

        config.streams.forEach(stream => {
            const option = document.createElement('option');
            option.value = stream.name;
            option.textContent = stream.name;
            streamSelect.appendChild(option);
        });

        console.log('Dropdown populated with stream options');
    } catch (error) {
        console.error('Error loading stream options:', error);
    }
}

function createAudioElement(src, loop = false, volume = 1.0) {
    let audio = new Audio();

    if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(audio);
        hlsInstances.push(hls);

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
            console.log(`HLS Manifest parsed for: ${src}`);
            setAudioCurrentTime(audio);
        });

        hls.on(Hls.Events.ERROR, (event, data) => {
            console.error('HLS.js error:', data);
        });
    } else if (audio.canPlayType('application/vnd.apple.mpegurl')) {
        audio.src = src;
        audio.addEventListener('loadedmetadata', () => {
            setAudioCurrentTime(audio);
        });
    } else {
        console.error('HLS is not supported on this browser.');
    }

    audio.loop = loop;
    audio.volume = volume;
    return audio;
}

function setAudioCurrentTime(audioElement) {
    const offset = calculatePlaybackOffset(audioElement.duration);
    audioElement.currentTime = offset;
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
        });

        volumeControlsContainer.appendChild(label);
        volumeControlsContainer.appendChild(volumeControl);
    });

    updateMediaSession(config.name);
}

function calculatePlaybackOffset(duration) {
    return consistentTimestamp % duration; // Offset time within the track duration
}

function playAllTracks() {
    if (baseTrack) {
        setAudioCurrentTime(baseTrack); // Ensure it always starts at the correct offset
        baseTrack.play();
    }

    bRollTracks.forEach(track => {
        setAudioCurrentTime(track); // Ensure it always starts at the correct offset
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

        hlsInstances.forEach(hls => hls.destroy());
        hlsInstances = [];
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

function moveStream(direction) {
    const currentIndex = streamSelect.selectedIndex;
    const newIndex = Math.min(Math.max(0, currentIndex + direction), streamSelect.options.length - 1);

    if (newIndex !== currentIndex) {
        streamSelect.selectedIndex = newIndex;
        streamSelect.dispatchEvent(new Event('change'));
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
    } else {
        try {
            console.log(`Loading config for stream: ${streamName}`);
            const response = await fetch('ambient-stream-config.json');
            const config = await response.json();
            const selectedConfig = config.streams.find(stream => stream.name === streamName);
            if (selectedConfig) {
                await fetchConsistentTimestamp(); // Fetch consistent timestamp before playing
                loadConfig(selectedConfig);
            } else {
                console.warn(`Stream config not found for stream: ${streamName}`);
            }
        } catch (error) {
            console.error('Failed to load stream config:', error);
        }
    }
});

window.addEventListener('DOMContentLoaded', async () => {
    await fetchConsistentTimestamp(); // Fetch consistent timestamp on page load
    loadStreamOptions();
});

