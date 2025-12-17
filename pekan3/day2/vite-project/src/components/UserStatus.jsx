
import useFriendStatus from '../hooks/useFriendStatus';


function UserStatus() {
  // Kita bisa menggunakan useFriendStatus dengan ID dummy atau logika lain
  // untuk menunjukkan penggunaan kembali logika yang sama
  const isOnline = useFriendStatus(0); // Contoh: ID 0 untuk pengguna sendiri

  if (isOnline === null) {
    return 'Memuat status Anda...';
  }
  return isOnline ? 'Anda Online' : 'Anda Offline';
}

export default UserStatus;