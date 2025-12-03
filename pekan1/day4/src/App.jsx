// App.jsx
import React from 'react';
import './App.css'; // Import file CSS
import Introduction from './components/introduction';


// ini adlah  function component
function App() {
  const isHighlighted = true;

  return (
    <div className="container">
      <h1 className="title">Styling dengan <span className="highlight">CSS Classes</span></h1>
      <p>
        Ini adalah cara paling umum untuk me-style komponen React.
        Kita mengimpor file CSS dan menggunakan atribut <code className="highlight">className</code>.
      </p>
      <button className="button">Pelajari Lebih Lanjut</button>
      <Introduction name="Raihan"/>
      <Introduction name="Nur"/>
      <Introduction name="Ichsan"/>
    </div>
  );
}

export default App;