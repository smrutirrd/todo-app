import React, { useState, useEffect } from 'react';
import AddTodo from '../../components/AddTodo';
import TodoList from '../../components/TodoList';
import Filter from '../../components/Filter';
import { fetchTodos, addTodo, toggleTodo, deleteTodo } from './todoService';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  // Fetch todos from the API when the app loads
  useEffect(() => {
    const loadTodos = async () => {
      const todosData = await fetchTodos();
      setTodos(todosData);
    };
    loadTodos();
  }, []);

  // Add a new todo
  const handleAddTodo = async (text) => {
    const newTodo = await addTodo(text);
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  // Toggle completion status of a todo
  const handleToggleTodo = async (id, completed) => {
    const updatedTodo = await toggleTodo(id, !completed);
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
    );
  };

  // Delete a todo
  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // Filter todos based on the active filter
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'pending') return !todo.completed;
    return true;
  });

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-center text-2xl font-bold mb-4">Todo App</h2>
      <AddTodo onAdd={handleAddTodo} />
      <Filter filter={filter} setFilter={setFilter} />
      <TodoList todos={filteredTodos} onToggle={handleToggleTodo} onDelete={handleDeleteTodo} />
    </div>
  );
};

export default TodoApp;
