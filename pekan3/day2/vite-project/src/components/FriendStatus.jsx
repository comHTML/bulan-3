import React, { useState, useEffect } from 'react';

function FriendStatus({ friendId }) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    // Simulasi API untuk status online
    const checkStatus = () => {
      // Logika kompleks untuk memeriksa status online
      const status = friendId % 2 === 0 ? true : false; // Contoh sederhana
      setIsOnline(status);
    };

    checkStatus(); // Panggil saat mounting
    const intervalId = setInterval(checkStatus, 5000); // Periksa setiap 5 detik

    return () => {
      clearInterval(intervalId);
    };
  }, [friendId]);

  if (isOnline === null) {
    return 'Memuat...';
  }
  return isOnline ? 'Online' : 'Offline';
}

export default FriendStatus;

