import React from 'react';
import './App.css';
import ProfileSection from './features/ProfileSection';
import buildBoard from './utils/buildBoard';

function App() {
  
  const arr1 = new Array(364).fill(1)
  const arr2 = new Array(364).fill(2)
  console.log(buildBoard(arr1, arr2))

  return (
    <div className="App">
      <ProfileSection />
      <ProfileSection />
    </div>
  );
}

export default App;
