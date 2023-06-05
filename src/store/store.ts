import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import userSlice from 'store/slice/user.slice';
import tasksSlice from 'store/slice/tasks.slice';
import categoriesSlice from 'store/slice/categories.slice';
import globalApi from 'store/api/global.api';

const store = configureStore({
  reducer: {
    [globalApi.reducerPath]: globalApi.reducer,
    user: userSlice,
    tasks: tasksSlice,
    categories: categoriesSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(globalApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
