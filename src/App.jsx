import { useState } from "react";

import Form from "./components/Form.jsx";

export default function App() {
  const initialTask = { title: "", priority: "low" };
  const [newTask, setNewTask] = useState(initialTask);
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editTask, setEditTask] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      setTasks((tasks) =>
        tasks.map((task) =>
          task.id === editId ? { ...task, ...newTask } : task
        )
      );
      setEditId(null);
    } else {
      setTasks((tasks) => [
        ...tasks,
        { id: Date.now(), ...newTask, completed: false },
      ]);
    }

    setNewTask(initialTask);
  };

  const handleCompleted = (id) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const handleEdit = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    setNewTask({ title: taskToEdit.title, priority: taskToEdit.priority });
    setEditTask({ title: taskToEdit.title, priority: taskToEdit.priority });
    setEditId(taskToEdit.id);
  };

  const handleCancel = () => {
    setEditId(null);
    setNewTask(initialTask);
    setEditTask({});
  };

  return (
    <>
      <Form
        {...{
          newTask,
          editTask,
          handleSubmit,
          handleChange,
          handleCancel,
          editId,
        }}
      />

      {tasks.length > 0 && (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleCompleted(task.id)}
              />
              <h2>{task.title}</h2>
              <p>
                Priority:{" "}
                {task.priority[0].toUpperCase() + task.priority.slice(1)}
              </p>
              <button
                disabled={editId === task.id}
                type="button"
                onClick={() => handleDelete(task.id)}
              >
                Delete
              </button>
              <button
                disabled={editId}
                type="button"
                onClick={() => handleEdit(task.id)}
              >
                Edit
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
