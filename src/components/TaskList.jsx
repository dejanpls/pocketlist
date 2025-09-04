import "../styles/taskList.css";

export default function TaskList({
  getProcessedTasks,
  handleCompleted,
  handleDelete,
  handleEdit,
  editId,
}) {
  return (
    <>
      {getProcessedTasks().length > 0 ? (
        <ul className="taskList">
          {getProcessedTasks().map((task) => (
            <li key={task.id} className="listItem">
              <div className="primary-container">
                <input
                  type="checkbox"
                  id={task.id}
                  checked={task.completed}
                  onChange={() => handleCompleted(task.id)}
                />
                <h2>{task.title}</h2>
              </div>

              <div className="secondary-container">
                <div className="secondary-info-container">
                  <p>Quantity: {task.quantity}</p>
                  <p>
                    Priority:{" "}
                    {task.priority[0].toUpperCase() + task.priority.slice(1)}
                  </p>
                </div>
                <div className="btn-container">
                  <button
                    className="delete"
                    disabled={editId === task.id}
                    type="button"
                    onClick={() => handleDelete(task.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="edit"
                    disabled={editId}
                    type="button"
                    onClick={() => handleEdit(task.id)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty-task-list-container">
          <p className="empty-task-list">Task List Empty</p>
        </div>
      )}
    </>
  );
}
