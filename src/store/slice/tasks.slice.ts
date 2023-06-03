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
      date: new Date('2023-05-28').toDateString(),
    },
    {
      taskId: 2,
      categoryId: 1,
      categoryName: 'personal',
      taskName: 'Second task',
      description: 'description for second task',
      status: false,
      date: new Date('2023-05-29').toDateString(),
    },
    {
      taskId: 3,
      categoryId: 2,
      categoryName: 'good',
      taskName: 'Good 1',
      description: 'test description',
      status: true,
      date: new Date('2023-06-03').toDateString(),
    },
    {
      taskId: 4,
      categoryId: 2,
      categoryName: 'good',
      taskName: 'Good 2',
      description: 'description for second task',
      status: false,
      date: new Date('2023-06-25').toDateString(),
    },
    {
      taskId: 5,
      categoryId: 1,
      categoryName: 'personal',
      taskName: 'Create first task',
      description: 'test description',
      status: true,
      date: new Date('2023-06-25').toDateString(),
    },
    {
      taskId: 6,
      categoryId: 1,
      categoryName: 'personal',
      taskName: 'Second task',
      description: 'description for second task',
      status: false,
      date: new Date('2023-06-25').toDateString(),
    },
    {
      taskId: 7,
      categoryId: 2,
      categoryName: 'good',
      taskName: 'Good 1',
      description: 'test description',
      status: true,
      date: new Date('2023-06-25').toDateString(),
    },
    {
      taskId: 8,
      categoryId: 2,
      categoryName: 'good',
      taskName: 'Good 2',
      description: 'description for second task',
      status: false,
      date: new Date('2023-06-25').toDateString(),
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
    updateTask: (state, action: PayloadAction<ITask>) => {
      return {
        ...state,
        tasks: state.tasks.map((item) => (item.taskId === action.payload.taskId
          ? action.payload
          : item)),
      };
    },
    createTask: (state, action: PayloadAction<ITask>) => {
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        tasks: state.tasks.filter((item) => item?.taskId !== action.payload),
      };
    },
    clearTasks: () => {
      return initialState;
    },
  },
});

export const {
  setTasks, clearTasks, createTask, updateTask, deleteTask,
} = tasksSlice.actions;
export default tasksSlice.reducer;
