import React from "react";
import TodoItem from "../Todo-item/TodoItem";

const TodoList = ({ todos, AddDeleteHandler }) => {
  const todoList = [...todos].sort((a, b) => b.age - a.age);
  return (
    <div>
      {todoList.map((item) => {
        return (
          <TodoItem
            key={item.id}
            {...item}
            AddDeleteHandler={AddDeleteHandler}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
