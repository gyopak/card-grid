import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cardContentApi = createApi({
  reducerPath: 'cardContentApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.punkapi.com/v2/beers' }),
  endpoints: (builder) => ({
    getCardContentByPage: builder.query({
      query: (page) => `?page=${page + 1}&per_page=7`,
    }),
  }),
})

export const { useGetCardContentByPageQuery } = cardContentApi