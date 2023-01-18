import { useState } from "react";
import "./App.css";
import TodoForm from "./components/todo-form/TodoForm";
import TodoList from "./components/todo-list/TodoList";

// const dataList = [
//   {
//     name: "Bayaman",
//     age: 90,
//   },
//   {
//     name: "Zhumabek",
//     age: 25,
//   },
//   {
//     name: "Nurbolot",
//     age: 24,
//   },
//   {
//     name: "Zhasmina",
//     age: 23,
//   },
//   {
//     name: "Feruza",
//     age: 19,
//   },
//   {
//     name: "Elina",
//     age: 17,
//   },
// ];
function App() {
  const [todos, setTodos] = useState([]);
  console.log(todos);

  const addTask = (Username, age) => {
    if (Username.trim().length === 0) {
      return null;
    }
    const newArray = {
      id: Math.random(),
      Username: Username,
      age: age,
      // name: name,
    };
    setTodos([...todos, newArray]);
  };
  const AddDeleteHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <TodoForm addTask={addTask} />
      <TodoList AddDeleteHandler={AddDeleteHandler} todos={todos} />
    </div>
  );
}

export default App;
