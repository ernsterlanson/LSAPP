import React, { useState, useRef } from 'react';

function RhythmActivity() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentMeter, setCurrentMeter] = useState('duple');
  const [isPlaying, setIsPlaying] = useState(false);
  const [syllableType, setSyllableType] = useState('neutral');
  const audioRef = useRef(null);

  const rhythmLevels = [
    {
      name: "Macrobeats and Microbeats",
      meters: {
        duple: `/audio/rhythm/level1/duple-${syllableType}.mp3`,
        triple: `/audio/rhythm/level1/triple-${syllableType}.mp3`
      }
    },
    {
      name: "Divisions",
      meters: ["duple", "triple"]
    },
    {
      name: "Division/Elongation",
      meters: ["duple", "triple"]
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
        <div className="syllable-selector">
          <button 
            className={syllableType === 'neutral' ? 'active' : ''} 
            onClick={() => setSyllableType('neutral')}
          >
            Neutral Syllables
          </button>
          <button 
            className={syllableType === 'solfege' ? 'active' : ''} 
            onClick={() => setSyllableType('solfege')}
            disabled={true}
          >
            Solfege Syllables
          </button>
        </div>
      </div>
      
      <div className="activity-area">
        {currentLevel === 0 && (
          <div className="audio-controls">
            <audio
              ref={audioRef}
              src={rhythmLevels[0].meters[currentMeter]}
              onEnded={() => setIsPlaying(false)}
            />
            <button 
              onClick={handlePlayPause}
              className="play-button"
            >
              {isPlaying ? 'Pause' : 'Play'}
            </button>
          </div>
        )}
      </div>

      <div className="controls">
        <button onClick={handleNextLevel}>Next Level</button>
      </div>
    </div>
  );
}

export default RhythmActivity; 