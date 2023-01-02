import React from 'react';
import './App.css';
import ProfileSection from './features/ProfileSection';
import Canvas from './features/Canvas';

function App() {
  return (
    <div className="App">
      <ProfileSection />
      <Canvas />
      <ProfileSection />
    </div>
  );
}

export default App;
