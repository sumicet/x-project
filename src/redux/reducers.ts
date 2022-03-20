import { combineReducers } from '@reduxjs/toolkit';
import { mainApi } from './apis/mainApi';
import uiSlice from './slices/uiSlice';
import walletSlice from './slices/walletSlice';

const rootReducer = combineReducers({
    wallet: walletSlice,
    ui: uiSlice,
    [mainApi.reducerPath]: mainApi.reducer,
});

export default rootReducer;
