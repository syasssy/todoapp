import React, { useState } from 'react';
import Task from './task';
import './App.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1', dueDate: new Date(), priority: 'Low' },
    { id: 2, text: 'React Project', dueDate: new Date(), priority: 'High' }
  ]);

  const [newTask, setNewTask] = useState('');
  const [newDueDate, setNewDueDate] = useState(new Date());
  const [newPriority, setNewPriority] = useState('Low');

  const addTask = () => {
    if (newTask.trim() !== '') {
      const newTaskObj = {
        id: tasks.length + 1,
        text: newTask,
        dueDate: newDueDate,
        priority: newPriority,
      };

      setTasks([...tasks, newTaskObj]);
      setNewTask('');
      setNewDueDate(new Date());
      setNewPriority('Low');
    }
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const organizedTasks = tasks.sort((a, b) => {
    if (a.dueDate < b.dueDate) return -1;
    if (a.dueDate > b.dueDate) return 1;
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });

  return (
    <div className="container">
      <h1>To-do List</h1>
      <ul>
        {organizedTasks.map((task) => (
          <Task key={task.id} task={task} onDelete={deleteTask} />
        ))}
      </ul>
      <div className="add-task">
        <input
          type="text"
          placeholder="Task text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <input
          type="datetime-local"
          value={newDueDate.toISOString().slice(0, -8)}
          onChange={(e) => setNewDueDate(new Date(e.target.value))}
        />
        <select
          value={newPriority}
          onChange={(e) => setNewPriority(e.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button onClick={addTask}>Add Task</button>
      </div>
    </div>
  );
};

export default TodoList;
