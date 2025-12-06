import { useState, useCallback } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');

  const addTodo = useCallback((text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    };
    setTodos(prev => [...prev, newTodo]);
  }, []);

  const toggleTodo = useCallback((id) => {
    setTodos(prev => 
      prev.map(todo => 
        todo.id === id 
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }, []);

  const deleteTodo = useCallback((id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

  const filteredTodos = todos.filter(todo => {
    if (filter === 'Active') return !todo.completed;
    if (filter === 'Completed') return todo.completed;
    return true;
  });

  return (
    <div className="app">
      <header className="app-header">
        <h1>Todo App</h1>
        <p>Kelola tugas harian Anda dengan mudah</p>
      </header>

      <main className="main-content">
        <TodoForm onAddTodo={addTodo} />
        <TodoFilter 
          filter={filter} 
          onFilterChange={setFilter} 
        />
        <TodoList 
          todos={filteredTodos}
          onToggleTodo={toggleTodo}
          onDeleteTodo={deleteTodo}
        />
      </main>

      <footer className="app-footer">
        <p>Total: {todos.length} | Aktif: {todos.filter(t => !t.completed).length} | Selesai: {todos.filter(t => t.completed).length}</p>
      </footer>
    </div>
  );
}

export default App;
