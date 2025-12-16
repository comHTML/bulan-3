import { UserProvider } from "./contexts/UserContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { NotificationProvider } from "./contexts/NotificationContext";
import { CartProvider } from "./contexts/CartContext";

import Header from "./components/Header";
import UserInfo from "./components/UserInfo";
import ThemedButton from "./components/ThemedButton";
import ThemedText from "./components/ThemedText";
import ThemedCard from "./components/ThemedCard";
import ProductList from "./components/ProductList";
import CartDisplay from "./components/CartDisplay";

import "./App.css"

export default function App() {
  return (
    <>
    <div >
    <UserProvider>
      <ThemeProvider>
        <LanguageProvider>
          <NotificationProvider>
            <CartProvider>
              <Header />
              <UserInfo />
              <ThemedButton />
              <ThemedText />
              <ThemedCard />
              <ProductList />
              <CartDisplay />
            </CartProvider>
          </NotificationProvider>
        </LanguageProvider>
      </ThemeProvider>
    </UserProvider>
    </div>
    </>
  );
}
