import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'store/model/user';

interface IUserState {
  user: IUser | null;
}

const initialState: IUserState = {
  user: {
    userId: 1,
    username: 'Victor Astakhov',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      return {
        user: action.payload,
      };
    },
    clearUser: () => {
      return initialState;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
