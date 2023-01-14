import React, { useState } from 'react';
import ProfileSection from './features/ProfileSection';
import Canvas from './features/Canvas';

function App() {
  const [playerOne, setPlayerOne] = useState(null)
  const [playerTwo, setPlayerTwo] = useState(null)


  const getPlayerData = (id, data) => {
    if (id === 1) setPlayerOne(data)
    if (id === 2) setPlayerTwo(data)
  }

  return (
    <div className="App">
      <ProfileSection inputId={1} getPlayerData={getPlayerData} />
      <Canvas players={{ playerOne, playerTwo }} />
      <ProfileSection inputId={2} getPlayerData={getPlayerData} />
    </div>
  );
}

export default App;
