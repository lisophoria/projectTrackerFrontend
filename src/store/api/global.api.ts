import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from 'store/store';

const baseUrl = `${process.env.REACT_APP_VERSION_API}${process.env.REACT_APP_API_PREFIX}`;

const globalApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const { accessToken } = (getState() as RootState).user;
      if (accessToken) headers.set('Authorization', `Bearer ${accessToken}`);
      headers.set('Access-Control-Allow-Origin', '*');
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: () => ({}),
});

export default globalApi;
