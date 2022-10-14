import { useState } from "react";
import { nanoid } from "nanoid";

import Task from "./comps/Task";
import "./App.css";

function App() {
  const [taskList, setTaskList] = useState([]);

  const addTaskHandler = () => {
    let newTask = {
      taskId: nanoid(8),
      title: "First Task",
      text: "first task in the list to workout",
    };
    setTaskList((prevState) => [...prevState, newTask]);
    return;
  };

  const deleteTaskHandler = (taskId) => {
    setTaskList((prevState) => prevState.filter((t) => t.taskId !== taskId));
  };

  return (
    <div className="App">
      <h1>Learning Github with React+Vite App Example.</h1>
      <div className="card">
        <button className="btn-add-task" onClick={addTaskHandler}>
          <b>+</b> Task
        </button>
        {taskList?.map((task) => (
          <Task key={task.taskId} taskId={task.taskId} title={task.title} text={task.text} onDelete={deleteTaskHandler} />
        ))}
      </div>
    </div>
  );
}

export default App;
