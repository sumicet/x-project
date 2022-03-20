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
        setWallet: (state, action: PayloadAction<WalletSliceState>) => {
            const newState = {
                ...state,
                ...action.payload,
            };

            return (state = newState);
        },
    },
});

export const { setWallet } = walletSlice.actions;

export default walletSlice.reducer;
