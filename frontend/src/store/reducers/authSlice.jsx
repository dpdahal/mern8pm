import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const token = localStorage.getItem('token');

export const authSliceApi = createApi({
    reducerPath: 'authSliceApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/auth' }),
    endpoints: (builder) => ({
        getVerify: builder.query({
            query: ()=> ({
                url: '/verify',
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
        }),
    }),
});

export const { 
    useGetVerifyQuery, 
} = authSliceApi;