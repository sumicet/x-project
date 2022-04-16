/// <reference types="react-scripts" />

interface Window {
    ethereum?: {
        isMetaMask?: true;
        providers?: any[];
        request: (...args: any[]) => Promise<any>;
        isConnected?: boolean;
        on: any;
        removeListener: any;
    };
    web3?: any;
}
