import { useCallback } from 'react';
import { config } from '../config';
import { useWeb3 } from './useWeb3';

export const useMetamask = () => {
    const getWeb3 = useWeb3();

    const connectMetamask = useCallback(async () => {
        try {
            const web3 = await getWeb3();

            const account = await web3.eth.getAccounts();

            const signature = await web3.eth.personal.sign(
                `Connect your wallet to ${config.appName}.`,
                account[0]
            );

            // Store account in redux
            console.log(signature);

            return true;
        } catch (error) {
            console.log(error);
        }
        return false;
    }, [getWeb3]);

    return { connectMetamask };
};
