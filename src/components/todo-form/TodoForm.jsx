import React, { useState } from "react";
import "./TodoForm.css";

const TodoForm = ({ addTask }) => {
  const [Username, setUsername] = useState("");
  const [age, setAge] = useState();
  // const enabled = Username.lenght > 0 && age.lenght > 0;

  const addTaskHandler = (e) => {
    e.preventDefault();
    addTask(Username, age);
    setUsername("");
    setAge("");
  };

  return (
    <form onSubmit={addTaskHandler} className="form">
      <input
        className="username"
        type="text"
        value={Username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        Username
      />

      <input
        className="age"
        type="Number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Number"
      />
      <button
        className="add"
        type="submit"
        //  disabled={disabled}
      >
        Add User
      </button>
    </form>
  );
};

export default TodoForm;
