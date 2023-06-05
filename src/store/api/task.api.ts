import globalApi from './global.api';
import { ITask } from '../model/task';

const taskApi = globalApi.injectEndpoints({
  endpoints: (build) => ({
    getTasksByCategoryId: build.query<ITask[], number>({
      query: (categoryId) => `/task/by-category/${categoryId}`,
    }),
    saveTask: build.mutation<void, ITask>({
      query: (task) => ({
        url: '/task',
        method: 'POST',
        body: { ...task },
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          dispatch(taskApi.endpoints.getTasksByCategoryId.initiate(arg.categoryId!, { forceRefetch: true }));
        } catch (e) {
          console.error(e);
        }
      },
    }),
    deleteTaskById: build.mutation<void, number>({
      query: (taskId) => ({
        url: `/task/${taskId}`,
        method: 'DELETE',
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          dispatch(taskApi.endpoints.getTasksByCategoryId.initiate(arg, { forceRefetch: true }));
        } catch (e) {
          console.error(e);
        }
      },
    }),
  }),
});

export const {
  useGetTasksByCategoryIdQuery,
  useSaveTaskMutation,
  useDeleteTaskByIdMutation,
} = taskApi;
export default taskApi;
