import { ICategory } from 'store/model/category';
import { setCategories } from 'store/slice/categories.slice';
import globalApi from './global.api';

const categoryApi = globalApi.injectEndpoints({
  endpoints: (build) => ({
    getCategoriesByUserId: build.query<ICategory[], number>({
      query: (userId) => `/category/by-user/${userId}`,
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const response = await queryFulfilled;
          if (response.data) {
            dispatch(setCategories(response.data));
          }
        } catch (e) {
          console.error(e);
        }
      },
    }),
  }),
});

export const {
  useGetCategoriesByUserIdQuery,
} = categoryApi;
export default categoryApi;
