import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const token = localStorage.getItem('token');

export const newsSliceApi = createApi({
    reducerPath: 'newsSliceApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/news' }),
    tagTypes: ['News'],
    endpoints: (builder) => ({
        getNews: builder.query({
            query: ()=> ({
                url: '/',
                method: 'GET',
            }),
            providesTags: ['News'],
        }),
        addNews: builder.mutation({
            query: (data) => ({
                url: '/',
                method: 'POST',
                body: data,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
            invalidatesTags: ['News'],
        }),
        
       
    }),
});

export const { 
    useGetNewsQuery, 
    useAddNewsMutation,
     
} = newsSliceApi;