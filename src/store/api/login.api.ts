import { IUserCredentials, IUserTokens, IUserWithPassword } from 'store/model/user';
import { setAccessToken } from 'store/slice/user.slice';
import globalApi from './global.api';

const loginApi = globalApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<IUserTokens, IUserCredentials>({
      query: (credentials) => ({
        url: 'auth/authenticate',
        method: 'POST',
        body: { ...credentials },
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const response = await queryFulfilled;
          if (response.data.accessToken) {
            dispatch(setAccessToken(response.data.accessToken));
          }
        } catch (e) {
          console.error(e);
        }
      },
    }),
    register: build.mutation<IUserTokens, IUserWithPassword>({
      query: (form) => ({
        url: 'auth/register',
        method: 'POST',
        body: { ...form },
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const response = await queryFulfilled;
          if (response.data.accessToken) {
            dispatch(setAccessToken(response.data.accessToken));
          }
        } catch (e) {
          console.error(e);
        }
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
} = loginApi;
export default loginApi;
