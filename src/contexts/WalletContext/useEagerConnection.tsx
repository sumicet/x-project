import { useEffect } from 'react';
import { getLocalStorage } from '../../utils/wallet';
import { useWallet } from './useWallet';

/**
 * Makes the Metamask connection persistent even if the user closes the tab/browser or refreshes the page.
 * If the user manually disconnected their wallet (from the website), the hook won't fire.
 */
export const useEagerConnection = () => {
    const { connect } = useWallet();

    useEffect(() => {
        const localStorage = getLocalStorage();

        if (localStorage && !localStorage.canConnectWallet) {
            return;
        }

        connect();
    }, [connect]);
};
