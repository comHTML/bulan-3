// App.jsx
import "./App.css";
// import ThemeProvider from './context/ThemeProvider';
// import ThemedButton from './components/ThemedButton';
// import ThemedParagraph from './components/ThemedParagraph';

import React from "react";
import ThemeProvider from "./context/ThemeProvider"; // Dari contoh sebelumnya
import UserProvider from "./context/UserProvider";
import ThemedButton from "./components/ThemedButton"; // Dari contoh sebelumnya
import ThemedParagraph from "./components/ThemedParagraph"; // Dari contoh sebelumnya
import UserInfoDisplay from "./components/UserInfoDisplay";

function App() {
  return (
    <ThemeProvider>
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Aplikasi dengan Context API</h2>

        <ThemedButton />
        <ThemedParagraph />

        <p>Context API membantu menghindari prop drilling untuk data global.</p>
      </div>{" "}
      <ThemeProvider>
        {" "}
        {/* Provider pertama */}
        <UserProvider>
          {" "}
          {/* Provider kedua */}
          <div style={{ padding: "20px", textAlign: "center" }}>
            <h2>Aplikasi dengan Multiple Contexts</h2>
            <ThemedButton />
            <ThemedParagraph />
            <hr />
            <UserInfoDisplay />
          </div>
        </UserProvider>
      </ThemeProvider>
    </ThemeProvider>
  );
}

export default App;
