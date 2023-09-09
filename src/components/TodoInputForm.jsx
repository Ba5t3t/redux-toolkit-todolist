import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodoReducer } from "../toolkitRedux/toolkitSlice";

export const TodoInputForm = () => {
  const todos = useSelector((state) => state.toolkit.todos);

  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const addTodo = () => {
    const newTodo = {
      id: Math.floor(Math.random() * (10000 + 1)),
      todo: inputValue,
    };
    if (inputValue === "") {
      alert("add a task to do!");
    } else {
      dispatch(addTodoReducer(newTodo));
    }

    setInputValue("");
  };

  return (
    <div className='input-container'>
      <input
        value={inputValue}
        placeholder='add a task to do'
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleAddTodo}
        className='input-field'
      />
      <button onClick={addTodo}>add</button>
    </div>
  );
};
