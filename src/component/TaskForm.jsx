import { useState } from "react";

function TaskForm({ addTask }) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("General");
  const handlesubmit = (e) => {
    e.preventDefault();
    addTask({ text: task, priority, category, completed: false });

    //reset state
    setTask("");
    setPriority("Medium");
    setCategory("General");
  };

  return (
    <form onSubmit={handlesubmit} className="task-form">
      <div id="inp">
        <input
          type="text"
          placeholder="Enter your Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <span>
          <button type="submit">Add task</button>
        </span>
      </div>

      <div id="btns">
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="High">High</option>
          <option value="Midium">Midium</option>
          <option value="Low">Low</option>
        </select>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="General">General</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
        </select>
      </div>
    </form>
  );
}

export default TaskForm;
