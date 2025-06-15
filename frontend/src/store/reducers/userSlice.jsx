import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const token = localStorage.getItem('token');

export const userSliceApi = createApi({
    reducerPath: 'userSliceApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/users' }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getUser: builder.query({
            query: ()=> ({
                url: '/',
                method: 'GET',
            }),
            providesTags: ['User'],
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
            invalidatesTags:['User'],
        }),
       
    }),
});

export const { 
    useDeleteUserMutation,
    useGetUserQuery 
} = userSliceApi;