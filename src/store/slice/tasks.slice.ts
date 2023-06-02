import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITask } from 'store/model/task';

interface ITasksState {
  tasks: ITask[];
}

const initialState: ITasksState = {
  tasks: [
    {
      taskId: 1,
      categoryId: 1,
      categoryName: 'personal',
      taskName: 'Create first task',
      description: 'test description',
      status: true,
      date: new Date('2023-05-28'),
    },
    {
      taskId: 2,
      categoryId: 1,
      categoryName: 'personal',
      taskName: 'Second task',
      description: 'description for second task',
      status: false,
      date: new Date('2023-05-29'),
    },
    {
      taskId: 3,
      categoryId: 2,
      categoryName: 'good',
      taskName: 'Good 1',
      description: 'test description',
      status: true,
      date: new Date('2023-05-28'),
    },
    {
      taskId: 4,
      categoryId: 2,
      categoryName: 'good',
      taskName: 'Good 2',
      description: 'description for second task',
      status: false,
      date: new Date('2023-06-25'),
    },
    {
      taskId: 5,
      categoryId: 1,
      categoryName: 'personal',
      taskName: 'Create first task',
      description: 'test description',
      status: true,
      date: new Date('2023-06-25'),
    },
    {
      taskId: 6,
      categoryId: 1,
      categoryName: 'personal',
      taskName: 'Second task',
      description: 'description for second task',
      status: false,
      date: new Date('2023-06-25'),
    },
    {
      taskId: 7,
      categoryId: 2,
      categoryName: 'good',
      taskName: 'Good 1',
      description: 'test description',
      status: true,
      date: new Date('2023-06-25'),
    },
    {
      taskId: 8,
      categoryId: 2,
      categoryName: 'good',
      taskName: 'Good 2',
      description: 'description for second task',
      status: false,
      date: new Date('2023-06-25'),
    },
  ],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<ITask[]>) => {
      return {
        ...state,
        tasks: action.payload,
      };
    },
    clearTasks: () => {
      return initialState;
    },
  },
});

export const { setTasks, clearTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
