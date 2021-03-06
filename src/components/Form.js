import React from "react";

export default function Form({ setinputText, todos, setTodos, inputText, setStatus, filteredTodos }) {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setinputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setinputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value)
  };

  return (
    <form>
      <input
        type="text"
        value={inputText}
        onChange={inputTextHandler}
        className="todo-input"
      />
      <button className="todo-button" type="submit" onClick={submitTodoHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}
