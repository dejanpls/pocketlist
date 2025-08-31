import "../styles/styles.css";

import Form from "./Form.jsx";
import TaskList from "./TaskList.jsx";
import SortDropdown from "./SortDropdown.jsx";
import Tabs from "./Tabs.jsx";

export default function Todo({ formData, sortData, taskListData, filterData }) {
  return (
    <>
      <Form {...formData} />
      <SortDropdown {...sortData} />
      <TaskList {...taskListData} />
      <Tabs {...filterData} />
    </>
  );
}
