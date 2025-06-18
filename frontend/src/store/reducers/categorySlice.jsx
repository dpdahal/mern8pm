import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categorySliceApi = createApi({
    reducerPath: 'categorySliceApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/category' }),
    tagTypes: ['Category'],
    endpoints: (builder) => ({
        getCategory: builder.query({
            query: ()=> ({
                url: '/',
                method: 'GET',
            }),
            providesTags: ['Category'],
        }),
       
    }),
});

export const { 
    useGetCategoryQuery, 
} = categorySliceApi;