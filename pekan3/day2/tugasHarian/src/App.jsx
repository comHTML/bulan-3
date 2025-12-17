import ShowHideText from "./components/ShowHideText";
import Switch from "./components/Switch";
import Post from "./components/Post";
import CounterComponent from "./components/CounterComponent";
import SimpleForm from "./components/SimpleForm";
import ThemePreference from "./components/ThemePreference";



import './App.css'

function App() {
  return (
    <div>
      <h2>Evaluasi Harian Custom Hooks</h2>
      <ShowHideText />
      <Switch />
      <Post />
      <CounterComponent />
      <SimpleForm />
      <ThemePreference />
    </div>
  );
}

export default App;