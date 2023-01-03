import React from 'react';
import './App.css';
import ProfileSection from './features/ProfileSection';
import Canvas from './features/Canvas';

function App() {
  return (
    <div className="App">
      <ProfileSection inputId={1} />
      <Canvas />
      <ProfileSection inputId={2} />
    </div>
  );
}

export default App;
