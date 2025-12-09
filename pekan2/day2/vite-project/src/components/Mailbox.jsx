function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h2>Conditional Rendering dengan && Operator</h2>
      <h1>Halo!</h1>
      {unreadMessages.length > 0 &&
        <p>
          Anda memiliki {unreadMessages.length} pesan belum dibaca.
        </p>
      }
      {unreadMessages.length === 0 &&
        <p>Tidak ada pesan baru.</p>
      }
    </div>
  );
}

export default Mailbox;