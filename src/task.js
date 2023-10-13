import React, { useState } from 'react';
import './App.css';

const Task = ({ task, onDelete }) => {
  const { id, text, dueDate, priority } = task;
  const [isDone, setIsDone] = useState(false);

  const handleDoneToggle = () => {
    setIsDone(!isDone);
  };

  return (
    <li className={`task ${priority} ${isDone ? 'done' : ''}`}>
      <input type="checkbox" checked={isDone} onChange={handleDoneToggle} />
      <strong>{text}</strong>
      <div>Due Date: {dueDate ? dueDate.toLocaleString() : 'Not specified'}</div>
      <div>Priority: {priority}</div>
      <button className="delete-button" onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

export default Task;
