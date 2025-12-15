import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // Kode di sini akan dijalankan setelah setiap render komponen
    console.log('Komponen di-render atau di-update!');
  }); // Tanpa array dependensi, akan berjalan setelah setiap render

  return (
    <div>
      <h1>Contoh useEffect</h1>
      <p><strong>Lihat konsol browser Anda.</strong></p>
    </div>
  );
}

export default MyComponent;