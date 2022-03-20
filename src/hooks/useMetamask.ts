import { useCallback } from 'react';
import { config } from '../config';
import { useAppDispatch } from '../redux/hooks';
import { setWallet } from '../redux/slices/walletSlice';
import { useWeb3 } from './useWeb3';

export const useMetamask = () => {
    const getWeb3 = useWeb3();
    const dispatch = useAppDispatch();

    const connectMetamask = useCallback(async () => {
        try {
            const web3 = await getWeb3();

            const accounts = await web3.eth.getAccounts();

            await web3.eth.personal.sign(`Connect your wallet to ${config.appName}.`, accounts[0]);

            dispatch(setWallet({ walletAddress: accounts[0] }));

            return true;
        } catch (error) {
            console.log(error);
        }
        return false;
    }, [dispatch, getWeb3]);

    return { connectMetamask };
};
