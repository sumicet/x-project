import { useContext } from 'react';
import { WalletContext } from './WalletProvider';

export const useWallet = () => {
    const walletContext = useContext(WalletContext);

    return walletContext;
};
