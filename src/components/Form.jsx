import "../styles/form.css";

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
      <div className="main-input-container">
        <label htmlFor="title">
          <input
            id="title"
            name="title"
            value={newTask.title}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="controls">
        <div className="secondary-input-container">
          <label htmlFor="quantity">
            Quantity:
            <input
              type="number"
              min="1"
              max="99999"
              id="quantity"
              name="quantity"
              value={newTask.quantity}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="priority">
            Priority:
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
        </div>

        <div className="btn-container">
          <button
            type="submit"
            disabled={
              !newTask.title ||
              (editTask &&
                newTask.title === editTask.title &&
                newTask.quantity === editTask.quantity &&
                newTask.priority === editTask.priority)
            }
          >
            {editId ? "Save Changes" : "Add Task"}
          </button>

          {editId && (
            <button type="button" className="cancel" onClick={handleCancel}>
              {newTask.title === editTask.title &&
              newTask.quantity === editTask.quantity &&
              newTask.priority === editTask.priority
                ? "Cancel"
                : "Discard"}
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
