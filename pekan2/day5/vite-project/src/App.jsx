import "./App.css";
import Calculator from "./components/Calculator";
import CounterWithReducer from "./components/CounterWithReducer";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";
import TemperatureInput from "./components/TemperatureInput";
import ThemedButton from "./components/ThemedButton";

function App() {
  return (
    <>
      {/* <Calculator /> */}
      {/* <CounterWithReducer /> */}
      <ThemeProvider>
        <TemperatureInput />
        <ThemedButton />
      </ThemeProvider>
    </>
  );
}

export default App;
