import { ICategory } from 'store/model/category';
import {
  createCategory, deleteCategory, setCategories, updateCategory, 
} from 'store/slice/categories.slice';
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
    deleteCategoryById: build.mutation<void, number>({
      query: (categoryId) => ({
        url: `/category/${categoryId}`,
        method: 'DELETE',
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const response = await queryFulfilled;
          if (response) {
            dispatch(deleteCategory(arg));
          }
        } catch (e) {
          console.error(e);
        }
      },
    }),
    saveCategory: build.mutation<void, ICategory>({
      query: (category) => ({
        url: 'category',
        method: 'POST',
        body: { ...category },
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          if (arg.categoryId) {
            dispatch(updateCategory(arg));
          } else {
            dispatch(createCategory(arg));
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
  useDeleteCategoryByIdMutation,
  useSaveCategoryMutation,
} = categoryApi;
export default categoryApi;
