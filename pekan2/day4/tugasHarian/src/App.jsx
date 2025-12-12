import FetchPost  from './components/FetchPost'
import FetchUser from './components/FetchUser'
import FetchErr from './components/FetchErr'
import FetchPostWithAbort from './components/FetchPostWithAbort'
import FilteredUsers from './components/FilteredUsers'



import './App.css'
import FilteredUsers from './components/FilteredUsers'


function App() {
  

  return (
    <>
      <FetchPost />

      <FetchUser />

      <FetchErr />

      <FetchPostWithAbort />

      <FilteredUsers />
    </>
  )
}

export default App
