import React from 'react'
import MyComponent from './components/MyComponent'  
import Timer from './components/Timer'
import UserProfile from './components/UserProfile'
import { useState } from 'react'
import WindowSizeTracker from './components/WindowSizeTracker'
import MultiEffectComponent from './components/MultiEffectComponent'
import './App.css'

function App() {
  const [showTracker, setShowTracker] = useState(true);

  return (
    <div>

       <MultiEffectComponent />

       {/* <WindowSizeTracker />


       <button onClick={() => setShowTracker(prev => !prev)}>
        {showTracker ? 'Sembunyikan' : 'Tampilkan'} Pelacak
      </button>
      {showTracker && <WindowSizeTracker />}

      <UserProfile userId={1} />

      <Timer />

      <MyComponent />  */}
    </div>
  );
}


export default App;