export default function App() {
  return (
    <form>
      <label htmlFor="title">
        <input id="title" name="title" />
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
  );
}
