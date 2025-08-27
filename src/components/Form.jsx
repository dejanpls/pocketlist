export default function Form({
  newTask,
  editTask,
  handleSubmit,
  handleChange,
  handleCancel,
  editId,
}) {
  return (
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

      <button
        type="submit"
        disabled={
          !newTask.title ||
          (editTask &&
            newTask.title === editTask.title &&
            newTask.priority === editTask.priority)
        }
      >
        {editId ? "Save Changes" : "Add Task"}
      </button>

      {editId && (
        <button type="button" onClick={handleCancel}>
          {newTask.title === editTask.title &&
          newTask.priority === editTask.priority
            ? "Cancel"
            : "Discard"}
        </button>
      )}
    </form>
  );
}
