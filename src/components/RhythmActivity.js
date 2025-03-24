import React, { useState } from 'react';

function RhythmActivity() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentMeter, setCurrentMeter] = useState('duple');

  const rhythmLevels = [
    {
      name: "Macrobeats and Microbeats",
      meters: ["duple", "triple"]
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
  };

  const handleNextLevel = () => {
    if (currentLevel < rhythmLevels.length - 1) {
      setCurrentLevel(currentLevel + 1);
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
        <p>Pattern will be displayed here</p>
        {/* Audio player will be added here */}
      </div>

      <div className="controls">
        <button onClick={handleNextLevel}>Next Level</button>
      </div>
    </div>
  );
}

export default RhythmActivity; 