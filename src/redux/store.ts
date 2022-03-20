import { configureStore } from '@reduxjs/toolkit';
import { mainApi } from './apis/mainApi';
import rootReducer from './reducers';

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        }).concat([mainApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
