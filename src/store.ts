import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./features/task/taskSlice";

export const store = configureStore({
  reducer: {
    TaskData: tasksSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
