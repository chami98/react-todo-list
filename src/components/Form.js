import React from "react";

export default function Form({ setinputText }) {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setinputText(e.target.value);
  };

  return (
    <form>
      <input type="text" onChange={inputTextHandler} className="todo-input" />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}
