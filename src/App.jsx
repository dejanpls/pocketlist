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

  return (
    <>
      <form>
        <label htmlFor="title">
          <input
            id="title"
            name="title"
            value={newTask.title}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="priority">
          <select id="priority" name="priority">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>

        <button type="submit">Add Task</button>
      </form>

      {newTask.title && console.log(newTask)}
    </>
  );
}
