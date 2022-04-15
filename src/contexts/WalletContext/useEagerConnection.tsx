import { useEffect } from 'react';
import { useWallet } from './useWallet';

export const useEagerConnection = () => {
    const { connect } = useWallet();

    useEffect(() => {
        connect();
    }, [connect]);
};
