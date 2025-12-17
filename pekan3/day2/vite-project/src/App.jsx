// import UserStatus from './components/UserStatus2'
import FriendStatus from './components/FriendStatus'
import FriendStatus2 from './components/FriendStatus2'
import UserStatus from './components/UserStatus'
// import useFriendStatus from './hooks/useFriendStatus'
import PostViewer from './components/PostViewer'
import React, { useState,  } from 'react';


import './App.css'

function App() {
  const [currentPostId, setCurrentPostId] = useState(1);

  return (
    <div>
      <h2>Contoh Hooks Composition (useFetch)</h2>
      <PostViewer postId={currentPostId} />
      <button onClick={() => setCurrentPostId(prevId => prevId + 1)}>
        Lihat Postingan Berikutnya
      </button>
    </div>
  );
}

export default App;