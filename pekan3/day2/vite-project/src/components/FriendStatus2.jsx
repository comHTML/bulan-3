import useFriendStatus from "../hooks/useFriendStatus";


function FriendStatus2({ friendId }) {
  const isOnline = useFriendStatus(friendId); // Menggunakan Custom Hook

  if (isOnline === null) {
    return 'Memuat...';
  }
  return isOnline ? 'Online' : 'Offline';
}

export default FriendStatus2;