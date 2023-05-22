import { useState } from "react";
import "./main.css";

export default function Todolist() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Task 1",
      completed: true,
    },
    {
      id: 2,
      name: "Task 2",
      completed: false,
    },
    {
      id: 3,
      name: "Task 3",
      completed: false,
    },
  ]);

  const [ show, setShow ] = useState(false);

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="App">
      <h1>Task list</h1>
      <ul>
        <button className="trigger" onClick={() => setShow(!show)}>Toggle</button>
        { show && tasks.map((task) => (
          <li key={task.id}>
            <span>{task.id} - {task.name}</span>
            <button className="delete" onClick={() => handleDelete(task.id)}>Delete</button>
            </li>
        ))
        }
      </ul>
    </div>
  );
}
