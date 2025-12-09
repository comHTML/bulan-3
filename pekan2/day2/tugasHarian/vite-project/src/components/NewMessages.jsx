function NewMessages({ messages }) {
  return (
    <div>
      <h2>Inbox</h2>

      {messages.length > 0 && (
        <p>Anda memiliki {messages.length} pesan baru.</p>
      )}
    </div>
  );
}
export default NewMessages;