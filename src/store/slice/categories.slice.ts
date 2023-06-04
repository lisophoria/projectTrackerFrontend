import { ICategory } from 'store/model/category';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICategoryState {
  categories: ICategory[];
}

const initialState: ICategoryState = {
  categories: [
    {
      categoryId: 1,
      categoryName: 'Personal',
    },
    {
      categoryId: 2,
      categoryName: 'Job',
    },
    {
      categoryId: 3,
      categoryName: 'Other',
    },
  ],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<ICategory[]>) => {
      return {
        ...state,
        categories: action.payload,
      };
    },
    updateCategory: (state, action: PayloadAction<ICategory>) => {
      return {
        ...state,
        categories: state.categories.map((item) => (item.categoryId === action.payload.categoryId
          ? action.payload
          : item)),
      };
    },
    createCategory: (state, action: PayloadAction<ICategory>) => {
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    },
    deleteCategory: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        categories: state.categories.filter((item) => item?.categoryId !== action.payload),
      };
    },
    clearCategories: () => {
      return initialState;
    },
  },
});

export const {
  setCategories, createCategory, deleteCategory, updateCategory, clearCategories, 
} = categoriesSlice.actions;
export default categoriesSlice.reducer;
