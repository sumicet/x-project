import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface WalletSliceState {
    walletAddress: string | null;
}

const initialState: WalletSliceState = {
    walletAddress: null,
};

export const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<WalletSliceState>) => {
            state = {
                ...state,
                ...action.payload,
            };
        },
    },
});

export const { setData } = walletSlice.actions;

export default walletSlice.reducer;
