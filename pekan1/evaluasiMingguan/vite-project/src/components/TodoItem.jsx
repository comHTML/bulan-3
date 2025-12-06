
function TodoItem({ todo, onToggleTodo, onDeleteTodo }) {
  const style = todo.completed 
    ? { 
        textDecoration: 'line-through', 
        opacity: 0.6,
        backgroundColor: '#f0f8f0'
      } 
    : {};

  return (
    <li className="todo-item" style={style}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleTodo(todo.id)}
          className="todo-checkbox"
          id={`todo-${todo.id}`}
        />
        <label htmlFor={`todo-${todo.id}`} className="todo-text">
          {todo.text}
        </label>
      </div>
      <button 
        className="delete-btn"
        onClick={() => onDeleteTodo(todo.id)}
        aria-label="Hapus todo"
      >
        🗑️
      </button>
    </li>
  );
}

export default TodoItem;
