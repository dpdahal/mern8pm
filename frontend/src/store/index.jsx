import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { userSliceApi } from './reducers/userSlice';
import { authSliceApi } from './reducers/authSlice';


export const store = configureStore({
    reducer: {
        [authSliceApi.reducerPath]: authSliceApi.reducer,
        [userSliceApi.reducerPath]: userSliceApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authSliceApi.middleware,
            userSliceApi.middleware
        )
})

setupListeners(store.dispatch)