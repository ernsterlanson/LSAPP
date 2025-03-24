import React, { useState, useRef } from 'react';

function RhythmActivity() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentMeter, setCurrentMeter] = useState('duple');
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const rhythmLevels = [
    {
      name: "Macrobeats and Microbeats - Neutral",
      meters: {
        duple: "/audio/rhythm/level1/duple-macro-micro-neutral.mp3",
        triple: "/audio/rhythm/level1/triple-macro-micro-neutral.mp3"
      }
    },
    {
      name: "Macrobeats and Microbeats - Solfege",
      meters: {
        duple: "/audio/rhythm/level1/duple-macro-micro-solfege.mp3",
        triple: "/audio/rhythm/level1/triple-macro-micro-solfege.mp3"
      }
    },
    {
      name: "Divisions - Neutral",
      meters: {
        duple: "/audio/rhythm/level2/duple-divisions-neutral.mp3",
        triple: "/audio/rhythm/level2/triple-divisions-neutral.mp3"
      }
    },
    {
      name: "Divisions - Solfege",
      meters: {
        duple: "/audio/rhythm/level2/duple-divisions-solfege.mp3",
        triple: "/audio/rhythm/level2/triple-divisions-solfege.mp3"
      }
    },
    {
      name: "Elongations - Neutral",
      meters: {
        duple: "/audio/rhythm/level3/duple-elongations-neutral.mp3",
        triple: "/audio/rhythm/level3/triple-elongations-neutral.mp3"
      }
    },
    {
      name: "Elongations - Solfege",
      meters: {
        duple: "/audio/rhythm/level3/duple-elongations-solfege.mp3",
        triple: "/audio/rhythm/level3/triple-elongations-solfege.mp3"
      }
    }
  ];

  const handleMeterChange = (meter) => {
    setCurrentMeter(meter);
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
    if (currentLevel < rhythmLevels.length - 1) {
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
    <div className="rhythm-activity">
      <h2>Rhythm Activities</h2>
      <div className="level-info">
        <h3>Current Level: {rhythmLevels[currentLevel].name}</h3>
        <div className="meter-selector">
          <button 
            className={currentMeter === 'duple' ? 'active' : ''} 
            onClick={() => handleMeterChange('duple')}
          >
            Duple Meter
          </button>
          <button 
            className={currentMeter === 'triple' ? 'active' : ''} 
            onClick={() => handleMeterChange('triple')}
          >
            Triple Meter
          </button>
        </div>
      </div>
      
      <div className="activity-area">
        <div className="audio-controls">
          <audio
            ref={audioRef}
            src={rhythmLevels[currentLevel].meters[currentMeter]}
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
          disabled={currentLevel === rhythmLevels.length - 1}
        >
          Next Level
        </button>
      </div>
    </div>
  );
}

export default RhythmActivity; 