import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'store/model/user';

interface IUserState {
  user: IUser | null;
  accessToken: string | null;
}

const initialState: IUserState = {
  user: null,
  accessToken: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        accessToken: action.payload,
      };
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      return {
        ...state,
        user: action.payload,
      };
    },
    clearUser: () => {
      return initialState;
    },
  },
});

export const { setAccessToken, setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
