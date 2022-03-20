import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UiState {
    window: {
        width: number;
        height: number;
    };
}

const initialState: UiState = {
    window: {
        width: 0,
        height: 0,
    },
};

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setUi: (state, action: PayloadAction<UiState>) => {
            const newState = {
                ...state,
                ...action.payload,
            };

            return (state = newState);
        },
    },
});

export const { setUi } = uiSlice.actions;

export default uiSlice.reducer;
