import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodoReducer,
  editTodoReducer,
} from "../toolkitRedux/toolkitSlice";

export const TodoItem = (props) => {
  const { id, todo } = props;
  const todos = useSelector((state) => state.toolkit.todos);
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [updateInput, setUpdateInput] = useState(todo);

  const deleteTodo = (id) => {
    dispatch(deleteTodoReducer(id));
  };

  const editingToggle = (e) => {
    setEditing(true);
  };

  const handleEditTodo = (e) => {
    if (e.key === "Enter") {
      dispatch(editTodoReducer({ id, newTodo: updateInput }));
      setEditing(false);
    }
  };

  return (
    <li className='todo-item'>
      <label>{todo}</label>
      <button onClick={() => deleteTodo(id)}>Delete</button>
      <button onClick={editingToggle}>Edit</button>
      {editing && (
        <input
          value={updateInput}
          onChange={(e) => setUpdateInput(e.target.value)}
          onKeyDown={handleEditTodo}
        />
      )}
    </li>
  );
};
