// TodoApp.js
import React, { useState } from 'react';
import TodoItem from './TodoItem';

import './style.css'

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodoText, setNewTodoText] = useState('');

  const handleAddTodo = () => {
    if (newTodoText.trim() !== '') {
      const newTodo = {
        id: Date.now(), // Generate a unique ID
        text: newTodoText,
        completed: false,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setNewTodoText('');
    }
    else{
      
    }
  };

  const handleEdit = (id, newText) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const handleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
        handleAddTodo();
    }
  };
  return (
    <div className="todo-list">
      <div className="add-todo">
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          onKeyDown={handleEnterPress}
          placeholder="Enter a new todo"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onEdit={handleEdit}
          onComplete={handleComplete}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default TodoApp;
