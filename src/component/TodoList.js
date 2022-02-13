import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.filter.map((item) => (
          <Todo
            todos={props.todos}
            setTodos={props.setTodos}
            todo={item}
            key={item.id}
            text={item.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
