import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setinputText] = useState("");

  return (
    <div className="App">
      <header>
        <h1>TODO List</h1>
      </header>
      <Form setinputText={setinputText} />
      <TodoList />
    </div>
  );
}

export default App;
