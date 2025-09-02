import "../styles/tabs.css";

export default function Tabs({ filter, handleFilter }) {
  return (
    <div className="tabs">
      <button
        className={filter === "all" ? "selected" : ""}
        type="button"
        value="all"
        onClick={handleFilter}
      >
        All
      </button>
      <button
        className={filter === "active" ? "selected" : ""}
        type="button"
        value="active"
        onClick={handleFilter}
      >
        Active
      </button>
      <button
        className={filter === "done" ? "selected" : ""}
        type="button"
        value="done"
        onClick={handleFilter}
      >
        Done
      </button>
    </div>
  );
}
