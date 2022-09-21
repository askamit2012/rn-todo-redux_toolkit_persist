import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskList: [
    {
      id: "1",
      task: "Feed The Cat",
      isChecked: false,
      isEditable: false,
    },
    {
      id: "2",
      task: "Walk The Dog",
      isChecked: false,
      isEditable: false,
    },
    {
      id: "3",
      task: "Eat Dinner",
      isChecked: false,
      isEditable: false,
    },
    {
      id: "4",
      task: "Do Laundry",
      isChecked: false,
      isEditable: false,
    },
  ],
};

export const toDoSlice = createSlice({
  name: "toDo",
  initialState,
  reducers: {
    addTask: (state, task) => {
      state.taskList.unshift(task.payload);
    },
    deleteTask: (state, payload) => {
      state.taskList.splice(payload.payload, 1);
    },
    checkTask: (state, payload) => {
      let index = payload.payload;
      state.taskList[index].isChecked = !state.taskList[index].isChecked;
    },
    editTask: (state, payload) => {
      let index = payload.payload;
      state.taskList[index].isEditable = !state.taskList[index].isEditable;
    },
    modifyTask: (state, payload) => {
      let index = payload.payload.index,
        task = payload.payload.newTask;
      state.taskList.splice(index, 1, task);
    },
  },
});

export const { addTask, deleteTask, checkTask, editTask, modifyTask } =
  toDoSlice.actions;
export default toDoSlice.reducer;
