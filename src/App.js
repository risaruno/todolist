import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./component/Form";
import TodoList from "./component/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    getLocal();
  }, []);

  useEffect(
    () => {
      saveLocal();
      filterHandler();
    }, // eslint-disable-next-line
    [todos, status]
  );

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilter(todos.filter((el) => el.completed === true));
        break;
      case "uncompleted":
        setFilter(todos.filter((el) => el.completed === false));
        break;
      default:
        setFilter(todos);
        break;
    }
  };

  const saveLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocal = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        setInputText={setInputText}
        inputText={inputText}
        setTodos={setTodos}
        todos={todos}
        setStatus={setStatus}
        filterHandler={filterHandler}
      />
      <TodoList setTodos={setTodos} todos={todos} filter={filter} />
    </div>
  );
}

export default App;
