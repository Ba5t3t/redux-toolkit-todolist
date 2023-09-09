import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { TodoList } from "./components/TodoList";
import { TodoInputForm } from "./components/TodoInputForm";
import { Title } from "./components/Title";
import { SortTodosSelect } from "./components/SortTodosSelect";

function App() {
  const todos = useSelector((state) => state.toolkit.todos);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Title />
      <TodoInputForm />
      <SortTodosSelect />
      <TodoList />
    </>
  );
}

export default App;
