import React, { useState, useRef } from 'react';

function TonalActivity() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentTonality, setCurrentTonality] = useState('major');
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const tonalLevels = [
    {
      name: "Tonal Readiness - Neutral",
      description: "First pitch/resting tone exercise with neutral syllables",
      tonalities: {
        major: "/audio/tonal/level1/major-neutral.mp3",
        minor: "/audio/tonal/level1/minor-neutral.mp3"
      }
    },
    {
      name: "Tonal Readiness - Solfege",
      description: "First pitch/resting tone exercise with solfege syllables",
      tonalities: {
        major: "/audio/tonal/level1/major-solfege.mp3",
        minor: "/audio/tonal/level1/minor-solfege.mp3"
      }
    },
    {
      name: "Echo Pattern #1 - Neutral",
      description: "Pattern echo with neutral syllables",
      tonalities: {
        major: "/audio/tonal/level2/major-neutral.mp3",
        minor: "/audio/tonal/level2/minor-neutral.mp3"
      }
    },
    {
      name: "Echo Pattern #1 - Solfege",
      description: "Pattern echo with solfege syllables",
      tonalities: {
        major: "/audio/tonal/level2/major-solfege.mp3",
        minor: "/audio/tonal/level2/minor-solfege.mp3"
      }
    }
  ];

  const handleTonalityChange = (tonality) => {
    setCurrentTonality(tonality);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleNextLevel = () => {
    if (currentLevel < tonalLevels.length - 1) {
      setCurrentLevel(currentLevel + 1);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
      }
    }
  };

  const handlePreviousLevel = () => {
    if (currentLevel > 0) {
      setCurrentLevel(currentLevel - 1);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="tonal-activity">
      <h2>Tonal Activities</h2>
      <div className="level-info">
        <h3>Current Level: {tonalLevels[currentLevel].name}</h3>
        <p>{tonalLevels[currentLevel].description}</p>
        <div className="tonality-selector">
          <button 
            className={currentTonality === 'major' ? 'active' : ''} 
            onClick={() => handleTonalityChange('major')}
          >
            Major
          </button>
          <button 
            className={currentTonality === 'minor' ? 'active' : ''} 
            onClick={() => handleTonalityChange('minor')}
          >
            Minor
          </button>
        </div>
      </div>
      
      <div className="activity-area">
        <div className="audio-controls">
          <audio
            ref={audioRef}
            src={tonalLevels[currentLevel].tonalities[currentTonality]}
            onEnded={() => setIsPlaying(false)}
          />
          <button 
            onClick={handlePlayPause}
            className="play-button"
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </div>
      </div>

      <div className="controls">
        <button 
          onClick={handlePreviousLevel}
          disabled={currentLevel === 0}
        >
          Previous Level
        </button>
        <button 
          onClick={handleNextLevel}
          disabled={currentLevel === tonalLevels.length - 1}
        >
          Next Level
        </button>
      </div>
    </div>
  );
}

export default TonalActivity; 