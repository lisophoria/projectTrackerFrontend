import globalApi from './global.api';
import { ITask } from '../model/task';

const taskApi = globalApi.injectEndpoints({
  endpoints: (build) => ({
    getTasksByCategoryId: build.query<ITask[], number>({
      query: (categoryId) => `/task/by-category/${categoryId}`,
    }),
  }),
});

export const {
  useGetTasksByCategoryIdQuery,
} = taskApi;
export default taskApi;
