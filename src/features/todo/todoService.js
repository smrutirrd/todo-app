const API_URL = 'https://dummyjson.com/todos';

export const fetchTodos = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data.todos;
};

export const addTodo = async (text) => {
  const res = await fetch(`${API_URL}/add`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ todo: text, completed: false, userId: 1 })
  });
  return res.json();
};

export const toggleTodo = async (id, completed) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed })
  });
  return res.json();
};

export const deleteTodo = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
};
