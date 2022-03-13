import { useCallback } from 'react';
import Web3 from 'web3';

// TODO move to context
export const useWeb3 = () => {
    const getWeb3 = useCallback(() => {
        let web3: any = null;
        const win = window as any;

        if (win.ethereum) {
            // this.IsInstalled = true;
            web3 = new Web3(win.ethereum);
        } else if (win.web3) {
            web3 = new Web3(win.web3.currentProvider);
            // this.IsInstalled = true;
        }

        return web3;
    }, []);

    return getWeb3;
};
