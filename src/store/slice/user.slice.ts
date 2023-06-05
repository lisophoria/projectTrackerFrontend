import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, IUserTokens } from 'store/model/user';

interface IUserState {
  user: IUser | null;
  tokens: IUserTokens | null;
}

const initialState: IUserState = {
  user: null,
  tokens: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserTokens: (state, action: PayloadAction<IUserTokens>) => {
      return {
        ...state,
        tokens: action.payload,
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

export const { setUserTokens, setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
