# Ambient streams

Minimalist way to play a stream of ambient music on my home page with a hint of customization to the stream

# Design goals

- Playing a stream is like tuning into a radio station
- User can select from a list of streams (likely a drop-down)
- There is a single play / stop button that stops or resumes playback of the stream
- A stream consists of a base track and b-roll tracks that loop on top of it
- Streams are defined in a simple configuration file
- The stream infinitely loops the base track and any b-roll track the user desires
- The player should work on desktop and mobile (including mobile Safari)
- The player should ideally play in the background on mobile devices
- The player additionally allows the user to select or volume-adjust a subset of b-roll tracks
- Track selection and volume adjustment should be able to be adjusted without lag

# Implementation

- Goal is to actually synthesize the ambient stream on-the-fly
- Initially started off with basic audio elements
  - Problems: mobile volume adjustment, download entire files
- Transitioned to using media element sources with gain nodes
  - Problems: mobile volume works! media session does not
- Transitioned to using statically generated HLS files
  - Problems: mobile volume still a problem, using mute checkboxes
- [ambient-stream-config.json](https://github.com/geetduggal/geetduggal.github.io/blob/master/ambient-stream-config.json)

