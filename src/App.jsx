import { useState } from "react";

export default function App() {
  const initialTask = { title: "", priority: "low" };
  const [newTask, setNewTask] = useState(initialTask);
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTasks((tasks) => [
      ...tasks,
      { id: Date.now(), ...newTask, completed: false },
    ]);

    setNewTask(initialTask);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          <input
            id="title"
            name="title"
            value={newTask.title}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="priority">
          <select
            id="priority"
            name="priority"
            value={newTask.priority}
            onChange={handleChange}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>

        <button type="submit" disabled={!newTask.title}>
          Add Task
        </button>
      </form>

      {tasks.length > 0 && (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <input type="checkbox" checked={task.completed} />
              <h2>{task.title}</h2>
              <p>
                Priority:{" "}
                {task.priority[0].toUpperCase() + task.priority.slice(1)}
              </p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
