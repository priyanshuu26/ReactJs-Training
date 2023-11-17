import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState('');
  const [storetasks, setStoreTasks] = useState([]);

  const handleChange = (e) => {
    setTasks(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setStoreTasks([...storetasks, tasks]);
    setTasks('');
  };
  const handleDelete = (id) => {
    const updatedTasks = storetasks.filter((task, i) => i !== id);
    setStoreTasks(updatedTasks);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">task: </label>
        <input
          type="text"
          name="task"
          value={tasks}
          onChange={handleChange}
          autoComplete="off"
        />
        <button type="submit">add</button>
      </form>
      <h2>
        {storetasks.map((task, i) => (
          <li key={storetasks.indexOf(task)}>
            <h4>{task}</h4>
            <button type="button" onClick={() => handleDelete(i)}>
              Remove
            </button>
          </li>
        ))}
      </h2>
    </div>
  );
}

export default TodoList;
