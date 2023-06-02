import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import userSlice from 'store/slice/user.slice';
import tasksSlice from 'store/slice/tasks.slice';

const store = configureStore({
  reducer: {
    user: userSlice,
    tasks: tasksSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
