import "../styles/sortDropdown.css";

export default function SortDropdown({ sort, handleSort }) {
  return (
    <div className="options-container">
      <label htmlFor="sort">
        <select id="sort" name="sort" value={sort} onChange={handleSort}>
          <option value="newestFirst">Newest First</option>
          <option value="oldestFirst">Oldest First</option>
          <option value="titleAsc">Title A-Z</option>
          <option value="titleDesc">Title Z-A</option>
          <option value="priorityLowHigh">Priority Low-High</option>
          <option value="priorityHighLow">Priority High-Low</option>
          <option value="quantityAsc">Quantity Ascending</option>
          <option value="quantityDesc">Quantity Descending</option>
        </select>
      </label>
    </div>
  );
}
