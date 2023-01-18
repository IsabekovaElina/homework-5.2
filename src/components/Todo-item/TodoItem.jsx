import React from "react";
import "./TodoItem.css";

const TodoItem = ({ id, Username, age, AddDeleteHandler, disabled }) => {
  return (
    <div className="list">
      <div className="user">{Username}</div>{" "}
      <div className="years">{age}Years old</div>
      <button className="button" onClick={() => AddDeleteHandler(id, disabled)}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
