import UserGreeting from './UserGreating';
import GuestGreeting from './GuestGreating';


function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}


export default Greeting;