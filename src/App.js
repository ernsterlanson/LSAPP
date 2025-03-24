import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RhythmActivity from './components/RhythmActivity';
import TonalActivity from './components/TonalActivity';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>MLT Learning Sequence Activities</h1>
          <nav>
            <Link to="/">Home</Link> |{' '}
            <Link to="/rhythm">Rhythm Activities</Link> |{' '}
            <Link to="/tonal">Tonal Activities</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/rhythm" element={<RhythmActivity />} />
          <Route path="/tonal" element={<TonalActivity />} />
          <Route path="/" element={
            <div className="home">
              <h2>Welcome to MLT Learning Sequence Activities</h2>
              <p>Choose an activity type to begin:</p>
              <div className="activity-buttons">
                <Link to="/rhythm" className="activity-button">Rhythm Activities</Link>
                <Link to="/tonal" className="activity-button">Tonal Activities</Link>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 