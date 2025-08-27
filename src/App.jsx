import { useState } from "react";

import Form from "./components/Form.jsx";
import TaskList from "./components/TaskList.jsx";

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

      <TaskList
        {...{
          tasks,
          handleCompleted,
          handleDelete,
          handleEdit,
          editId,
        }}
      />
    </>
  );
}
