import Home from "./pages/Home";
import { CartProvider } from "./context/CartContext";
import { ThemeProvider } from "./context/ThemeContext";
import "./App.css";
function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Home />
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
