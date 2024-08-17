let isBase = false;

onmessage = function(e) {
    const data = e.data;

    switch (data.type) {
        case 'init':
            isBase = data.isBase;
            break;
        case 'play':
            playAudio();
            break;
        case 'stop':
            stopAudio();
            break;
        case 'volume':
            adjustVolume(data.value);
            break;
    }
};

function playAudio() {
    // Calculate playback offset only for the base track
    let offset = 0;
    if (isBase) {
        offset = calculatePlaybackOffset();
    }
    postMessage({ type: 'play', offset });
}

function stopAudio() {
    postMessage({ type: 'stop' });
}

function adjustVolume(value) {
    postMessage({ type: 'volume', value });
}

function calculatePlaybackOffset() {
    const currentTime = Date.now() / 1000; // Current time in seconds
    // Assuming duration is provided by the main thread; use a fixed duration or another method to calculate
    const duration = 180; // Replace with the actual duration or pass it as data
    return currentTime % duration;
}
