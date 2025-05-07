import React from 'react';
import TodoApp from './features/todo/TodoApp';

function App() {
  return (
      <div className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-3xl font-bold text-center mb-6">React To-Do List</h1>
        <TodoApp />
      </div>
    
  );
}

export default App;
