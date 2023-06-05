import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = `${process.env.REACT_APP_VERSION_API}${process.env.REACT_APP_API_PREFIX}`;

const globalApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers/*, { getState }*/) => {
      headers.set('Access-Control-Allow-Origin', '*');
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: () => ({}),
});

export default globalApi;
