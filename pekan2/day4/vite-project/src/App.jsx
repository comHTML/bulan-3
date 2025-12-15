import { useState } from 'react'
import FetchDataComponent from './components/FetchDataComponent'  
import AxiosDataComponent from './components/AxiosDataComponent'
import AsyncAwaitInEffect from './components/AsyncAwaitInEffect' 
import AbortFetchComponent from './components/AbortFetchComponent'
import UserListManipulated from './components/UserListManipulated'

import './App.css'
import { Axios } from 'axios'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <FetchDataComponent /> */}

      {/* <AxiosDataComponent /> */}

      {/* <AsyncAwaitInEffect /> */}

      {/* <AbortFetchComponent /> */}

      <UserListManipulated />
    </>
  )
}

export default App
