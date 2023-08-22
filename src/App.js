import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [todo, setTodo] = useState("");

  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <form style={{ paddingInline: "30px" }}>
        <textarea
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          // rows={6}
          // cols={70}
          style={{ width: "100%", height: "5rem" }}
          placeholder="Enter Todo"
        ></textarea>
        <br />
        <button
          type="button"
          onClick={() => {
            if (!todo) return alert("Please, enter a todo!");
            setTasks([todo, ...tasks]);
            setTodo("");
          }}
          style={{ padding: "10px 30px", marginTop: "10px" }}
        >
          {" "}
          Add Todo
        </button>
      </form>
      
        {tasks.length > 0 ? (
          <div
          style={{
            marginTop: "30px",
            margin: "30px",
            background: tasks.length > 3 ? "#500" : "#ccc",
            padding: "30px",
          }}
        >
          <div>
            {tasks.map((task, index) => (
              <Card
                key={index}
                task={task}
                deletTask={(itemToDel) =>
                  setTasks(tasks.filter((item) => item !== itemToDel))
                }
              />
            ))}
          </div>
          </div>
        ) : (
          " "
        )}
      
    </div>
  );
}

export default App;