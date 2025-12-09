function BadTodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Makan', completed: false },
    { id: 2, text: 'Tidur', completed: false },
    { id: 3, text: 'Coding', completed: false },
  ]);

  const reverseTodos = () => {
    setTodos([...todos].reverse()); // Membalik urutan
  };

  return (
    <div>
      <h2>Daftar Tugas (Bad Key Example)</h2>
      <button onClick={reverseTodos}>Balik Urutan</button>
      <ul>
        {todos.map((todo, index) => (
          // Menggunakan index sebagai key - BERPOTENSI MASALAH
          <li key={index}>
            {todo.text} <input type="text" placeholder="Catatan" />
          </li>
        ))}
      </ul>
      <p style={{ color: 'red' }}>
        Coba ketik sesuatu di kotak catatan, lalu klik "Balik Urutan".
        Anda akan melihat bahwa catatan tetap di posisi yang sama, bukan mengikuti itemnya.
      </p>
    </div>
  );
}

export default BadTodoList;