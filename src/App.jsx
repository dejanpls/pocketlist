import { useState } from "react";

import { initialTask } from "./utils/initialTask.jsx";
import { SORTS } from "./utils/sorts.js";
import { FILTERS } from "./utils/filters.js";

import Form from "./components/Form.jsx";
import TaskList from "./components/TaskList.jsx";

export default function App() {
  const [newTask, setNewTask] = useState(initialTask);
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editTask, setEditTask] = useState({});
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("newestFirst");

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

  const handleFilter = (e) => setFilter(e.target.value);

  const handleSort = (e) => setSort(e.target.value);

  const getProcessedTasks = () => {
    const filteredTasks = FILTERS[filter](tasks);
    return SORTS[sort](filteredTasks);
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
      <label htmlFor="sort">
        <select id="sort" name="sort" value={sort} onChange={handleSort}>
          <option value="newestFirst">Newest First</option>
          <option value="oldestFirst">Oldest First</option>
          <option value="titleAsc">Title A-Z</option>
          <option value="titleDesc">Title Z-A</option>
          <option value="priorityLowHigh">Priority Low-High</option>
          <option value="priorityHighLow">Priority High-Low</option>
        </select>
      </label>

      <TaskList
        {...{
          getProcessedTasks,
          handleCompleted,
          handleDelete,
          handleEdit,
          editId,
        }}
      />

      <div>
        <button type="button" value="all" onClick={handleFilter}>
          All
        </button>
        <button type="button" value="active" onClick={handleFilter}>
          Active
        </button>
        <button type="button" value="done" onClick={handleFilter}>
          Done
        </button>
      </div>
    </>
  );
}
