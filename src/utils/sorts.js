const PROPERTIES = { low: 0, medium: 1, high: 2 };

export const SORTS = {
  newestFirst: (tasks) => [...tasks].sort((a, b) => b.id - a.id),
  oldestFirst: (tasks) => [...tasks].sort((a, b) => a.id - b.id),
  titleAsc: (tasks) =>
    [...tasks].sort((a, b) => a.title.localeCompare(b.title)),
  titleDesc: (tasks) =>
    [...tasks].sort((a, b) => b.title.localeCompare(a.title)),
  priorityLowHigh: (tasks) =>
    [...tasks].sort((a, b) => PROPERTIES[a.priority] - PROPERTIES[b.priority]),
  priorityHighLow: (tasks) =>
    [...tasks].sort((a, b) => PROPERTIES[b.priority] - PROPERTIES[a.priority]),
};
