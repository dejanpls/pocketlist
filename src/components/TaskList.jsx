export default function TaskList({
  getProcessedTasks,
  handleCompleted,
  handleDelete,
  handleEdit,
  editId,
}) {
  return (
    <>
      {getProcessedTasks().length > 0 && (
        <ul>
          {getProcessedTasks().map((task) => (
            <li key={task.id}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleCompleted(task.id)}
              />
              <h2>{task.title}</h2>
              <p>Quantity: {task.quantity}</p>
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
