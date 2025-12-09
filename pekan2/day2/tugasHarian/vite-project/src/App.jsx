import LoginStatus from './components/LoginStatus'
import './App.css'
import Greetings from './components/Greetings'
import NewMessages from './components/NewMessages'
import StatusInfo from './components/StatusInfo'
import TaskList from './components/TaskList'
import React from 'react'


function App() {
  const messages = ['Halo!', 'Selamat datang di React!', 'Semoga harimu menyenangkan!'];

  const tasks = [
  { id: 1, text: 'Belajar React' },
  { id: 2, text: 'Mengerjakan tugas harian' },
  { id: 3, text: 'Istirahat sejenak' },
];  
  return (
    <>
     
<div style={{ padding: "20px", fontFamily: "Arial" }}>
<h1>Evaluasi Harian React.JS - day 2 Pekan 2</h1>


<hr />
<LoginStatus isLoggedIn={true} />


<hr />
<Greetings isLoggedIn={false} />


<hr />
<NewMessages messages={messages} />


<hr />
<StatusInfo status="success" />


<hr />
<TaskList tasks={tasks} />
</div>
    </>
  )
}

export default App
