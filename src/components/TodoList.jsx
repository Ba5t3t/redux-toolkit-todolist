import React from "react";
import { useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const todos = useSelector((state) => state.toolkit.todos);

  return (
    <ul className='list'>
      {todos.length === 0 && "No todos"}
      {todos.map((todo) => {
        return <TodoItem key={todo.id} {...todo} />;
      })}
    </ul>
  );
};
