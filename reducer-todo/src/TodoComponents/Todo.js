import React from "react";

const Todo = props => {
  console.log(props);

  return (
    <div
      className={`todo${props.todo.purchased ? " purchased" : ""}`}
      onClick={() => props.toggleItem(props.todo.id)}
    >
      <p>{props.todo.task}</p>
    </div>
  );
};

export default Todo;