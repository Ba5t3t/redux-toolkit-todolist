import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sortTodoReducer } from "../toolkitRedux/toolkitSlice";

export const SortTodosSelect = () => {
  const todos = useSelector((state) => state.toolkit.todos);
  const dispatch = useDispatch();

  const handleSort = (e) => {
    const value = e.target.value;
    dispatch(sortTodoReducer(value));
  };

  return (
    <div>
      <div className='sort'>
        <label htmlFor='id-sort'>Sort by alphabet: </label>
        <select onChange={handleSort}>
          <option value='asc'>ascend</option>
          <option value='desc'>descend</option>
        </select>
      </div>
    </div>
  );
};
