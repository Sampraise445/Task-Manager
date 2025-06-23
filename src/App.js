import './Style.css'
import { useEffect, useState } from "react";
import ProgressTracker from "./component/ProgressTracker";
import TaskForm from "./component/TaskForm";
import TaskList from "./component/TaskList";


function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const clearTasks = () => {
    setTasks([])
  }
  return (
    <div className="App">
      <header >
        <h1 className="title">Task Bro</h1>
        <p className="tagline">your friendly task Manager</p>
      </header>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
      <ProgressTracker tasks = {tasks} />

{tasks.length>0 && ( <button className='clear-btn' onClick={clearTasks}>Clear All Tasks</button>)}
     
    </div>
  );
}

export default App;
