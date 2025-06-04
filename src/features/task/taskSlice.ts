import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ITask {
  id: string;
  text: string;
  done: boolean;
}

export enum FilterTask {
  ALL = "All",
  ACTIVE = "Active",
  COMPLETED = "Completed",
}

interface ITaskState {
  tasks: ITask[];
  filter: FilterTask;
}

const initialState: ITaskState = {
  tasks: getLocalStorage(),
  filter: FilterTask.ALL,
};

function getLocalStorage(): ITask[] {
  const items = localStorage.getItem("tasksData");
  if (items) return JSON.parse(items);
  return [];
}

function setLocalStorage(tasks: ITask[]) {
  const items = JSON.stringify(tasks);
  localStorage.setItem("tasksData", items);
}

export const tasksSlice = createSlice({
  name: "TaskData",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const { tasks } = state;
      tasks.push(action.payload);
      setLocalStorage(tasks);
    },
    compliteTask: (state, action: PayloadAction<string>) => {
      const { tasks } = state;
      const task = tasks.find((item) => item.id === action.payload);
      if (task) {
        task.done = !task.done;
      }
      setLocalStorage(tasks);
    },
    filterTask: (state, action: PayloadAction<FilterTask>) => {
      state.filter = action.payload;
    },
    clearCompleted: (state) => {
      const hasCompletedTasks = state.tasks.some((item) => item.done);
      if (!hasCompletedTasks) return;

      state.tasks = state.tasks.filter((item) => !item.done);
      state.filter = FilterTask.ALL;
      setLocalStorage(state.tasks);
    },
  },
});

export const { addTask, compliteTask, filterTask, clearCompleted } = tasksSlice.actions;

export default tasksSlice.reducer;
