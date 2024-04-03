import { createSlice } from "@reduxjs/toolkit";
import { task } from "@/Reducers/taskReducer";
import type { PayloadAction } from "@reduxjs/toolkit";


const initialState: { tasks: task[] } = {
  tasks: [{id:1,text:"reduxtoolkittest"}],
};

const todoSlice = createSlice({
  name: "xxxx",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.tasks.push({ id: Date.now(), text: action.payload });
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
