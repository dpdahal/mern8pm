import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { userSliceApi } from './reducers/userSlice';
import { authSliceApi } from './reducers/authSlice';
import { categorySliceApi } from './reducers/categorySlice';
import { newsSliceApi } from './reducers/newsSlice';

export const store = configureStore({
    reducer: {
        [authSliceApi.reducerPath]: authSliceApi.reducer,
        [userSliceApi.reducerPath]: userSliceApi.reducer,
        [categorySliceApi.reducerPath]: categorySliceApi.reducer,
        [newsSliceApi.reducerPath]: newsSliceApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authSliceApi.middleware,
            userSliceApi.middleware,
            categorySliceApi.middleware,
            newsSliceApi.middleware
        )
})

setupListeners(store.dispatch)