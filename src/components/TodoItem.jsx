import React from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <li className="flex justify-between items-center p-2 bg-white shadow rounded">
      <span
        onClick={() => onToggle(todo.id)}
        className={`cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`}
      >
        {todo.todo}
      </span>
      <button onClick={() => onDelete(todo.id)} className="text-red-500">Delete</button>
    </li>
  );
};

export default TodoItem