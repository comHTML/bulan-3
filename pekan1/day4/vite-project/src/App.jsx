
// App.jsx
import React from 'react';
import './App.css'; // Import file CSS
import MyButton from '.components/MyButton';

function App() {
  
  return (
    <div className="container">
      <h1 className="title">Styling dengan <span className="highlight">CSS Classes</span></h1>
      <p>
        Ini adalah cara paling umum untuk me-style komponen React.
        Kita mengimpor file CSS dan menggunakan atribut <code className="highlight">className</code>.
      </p>
      <button className="button">Pelajari Lebih Lanjut</button>
       <div>
      <h1>Styling dengan CSS Modules</h1>
      <MyButton onClick={() => alert('Default Button Clicked!')}>
        Default Button
      </MyButton>
      <MyButton type="primary" onClick={() => alert('Primary Button Clicked!')}>
        Primary Button
      </MyButton>
      <p>
        Nama kelas CSS di-hash secara otomatis untuk mencegah konflik nama.
        Lihat inspeksi elemen di browser untuk melihat nama kelas yang dihasilkan.
      </p>
    </div>
    </div>
    
  );
}



export default App
