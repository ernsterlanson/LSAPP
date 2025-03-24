Simple LSA webapp. Based on Andy Mullen's tonal and rhythm progression

## Features
    1. Tonal progression
    2. Rhythm progression
    3. The progressions should play the audiofiles of the patterns

## Tech stack
    - React
    - Web Audio API

## Setup
1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm start` to start the development server

## Audio Files
The application requires audio files that are not included in the repository. Place your audio files in the following structure:

```
public/audio/
└── rhythm/
    └── level1/
        ├── duple-neutral.mp3
        └── triple-neutral.mp3
```

Additional audio files for other levels and solfege patterns can be added following the same naming convention.