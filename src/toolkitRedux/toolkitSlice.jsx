import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
  name: "toolkit",
  initialState: {
    todos: localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : [],
  },

  reducers: {
    addTodoReducer(state, action) {
      state.todos.push(action.payload);
    },

    deleteTodoReducer(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    editTodoReducer(state, action) {
      const { id, newTodo } = action.payload;
      state.todos = state.todos.map((item) =>
        item.id === id ? { ...item, todo: newTodo } : item
      );
    },

    sortTodoReducer(state, action) {
      const value = action.payload;
      state.todos = state.todos.sort((a, b) =>
        value === "asc" ? a.id - b.id : b.id - a.id
      );
    },
  },
});

export default toolkitSlice.reducer;
export const {
  addTodoReducer,
  deleteTodoReducer,
  editTodoReducer,
  sortTodoReducer,
} = toolkitSlice.actions;
