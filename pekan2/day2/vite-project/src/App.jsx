import Greeting from "./components/Greating";
import LoginButton from "./components/LoginButton";
import Mailbox from "./components/Mailbox";
import "./App.css";

import PageStatus from "./components/PageStatus";
import WarningBanner from "./components/WarningBanner";
import React from "react";
import ProductList from "./components/ProductList";
import BadTodoList from "./components/BadTodoList";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // console.log(isLoggedIn);

  // // getter pake isLoggedIn
  // // setter pake setIsLoggedIn"

  // const handleLoginClick = () => {
  //   setIsLoggedIn(true);
  // };

  // const handleLogoutClick = () => {
  //   setIsLoggedIn(false);
  // };


  const [showWarning, setShowWarning] = useState(true);
  const [dataStatus, setDataStatus] = useState('loading');

  const toggleWarning = () => {
    setShowWarning(prev => !prev);
  };

  const changeStatus = () => {
    const statuses = ['loading', 'success', 'error', 'unknown'];
    const currentIndex = statuses.indexOf(dataStatus);
    const nextIndex = (currentIndex + 1) % statuses.length;
    setDataStatus(statuses[nextIndex]);
  };


  const style = {
    padding: '10px',
    margin: '10px',
    border: '5px solid black',  
    boxShadow: '5px 25px 53px rgba(0,0,0,0.3)',
    borderRadius: '15px',
    backgroundColor: '#060606ff',
    width: '300px',
    height: 'auto',
    textAlign: 'left',
    paddingTop: '20px', 
    paddingBottom: '20px'
  
  }

  // const messages = ['React', 'Re: React', 'Re:Re: React', 'Re:Re:Re: React', 'Re:Re:Re:Re: React'];
  return (
    <>
    <div>
      {/* <h2>Conditional Rendering dengan Ternary Operator</h2>
      <LoginButton
        isLoggedIn={isLoggedIn}
        onClick={isLoggedIn ? handleLogoutClick : handleLoginClick}/> */}

      {/* <div>
      <Mailbox unreadMessages={messages} />
      <Mailbox unreadMessages={[]} />
      </div>
       */}

      {/* <div>
      <div>
      <h2>Conditional Rendering dengan Switch Statement</h2>
      <WarningBanner warn={showWarning} />
      <button onClick={toggleWarning}>
        {showWarning ? 'Sembunyikan' : 'Tampilkan'} Peringatan
      </button>

      <hr />

      <h3>Status Data:</h3>
      <PageStatus status={dataStatus} />
      <button onClick={changeStatus}>Ubah Status</button>
      </div>
      </div> */}

        <div style ={style}>
          <ProductList />
        </div>

        <div>
          <BadTodoList />
        </div> 
    </div>
    </>
  );
}

export default App
