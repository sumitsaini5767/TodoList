// TodoItem.js
import React, { useState } from 'react';

const TodoItem = ({ todo, onEdit, onComplete, onDelete }) => {
  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancelEdit = () => {
    setEditing(false);
    setNewText(todo.text);
  };

  const handleSaveEdit = () => {
    if (newText.trim() !== '') {
      onEdit(todo.id, newText);
      setEditing(false);
    }
  };


  const handleEnterPress1 = (e) => {
    if (e.key === 'Enter') {
      handleSaveEdit();
    }
  };

  return (
    <div className={"todo-item " + (todo.completed ? 'completed' : '')}>
      {editing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onKeyDown={handleEnterPress1}
          />
          <button onClick={handleSaveEdit}><i className='fa fa-check' style={{ color: 'seagreen' }}></i></button>
          <button onClick={handleCancelEdit}><i className='fa fa-xmark' style={{ color: 'red' }}></i></button>
        </>
      ) : (
        <>
          <div>{todo.text}</div>
          <div>
            <button onClick={() => onComplete(todo.id)}>
              {todo.completed ? (<i className='fa fa-check-circle' style={{ color: 'seagreen' }}></i>) : (<i className='fa fa-check-circle' style={{ color: 'grey' }}></i>)}
            </button>
            <button onClick={handleEdit}><i className='fa fa-edit' style={{ color: '#1b50ac' }}></i></button>
            <button onClick={() => onDelete(todo.id)}><i className='fa fa-circle-xmark' style={{ color: '#d01a1a' }}></i></button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
