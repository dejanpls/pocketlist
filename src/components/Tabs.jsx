export default function Tabs({ handleFilter }) {
  return (
    <>
      <button type="button" value="all" onClick={handleFilter}>
        All
      </button>
      <button type="button" value="active" onClick={handleFilter}>
        Active
      </button>
      <button type="button" value="done" onClick={handleFilter}>
        Done
      </button>
    </>
  );
}
