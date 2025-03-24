import React, { useState } from 'react';

function TonalActivity() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentTonality, setCurrentTonality] = useState('major');

  const tonalLevels = [
    {
      name: "Tonal Readiness",
      description: "First pitch exercise/resting tone exercise",
      tonalities: ["major", "minor"]
    },
    {
      name: "Echo Pattern Tonal Sequence #1",
      description: "Pattern echo in Major and Minor",
      tonalities: ["major", "minor"]
    },
    {
      name: "Solfege Syllables",
      description: "Solfege for Tonal Sequence #1",
      tonalities: ["major", "minor"]
    }
  ];

  const handleTonalityChange = (tonality) => {
    setCurrentTonality(tonality);
  };

  const handleNextLevel = () => {
    if (currentLevel < tonalLevels.length - 1) {
      setCurrentLevel(currentLevel + 1);
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
        <p>Pattern will be displayed here</p>
        {/* Audio player will be added here */}
      </div>

      <div className="controls">
        <button onClick={handleNextLevel}>Next Level</button>
      </div>
    </div>
  );
}

export default TonalActivity; 