import { createContext, ReactNode, useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Web3 from 'web3';

type Connect = () => Promise<
    | {
          status: 'success';
          data: {
              web3: Web3;
              account: any;
          };
      }
    | { status: 'error'; message: string }
> | null;

interface WalletContextProps {
    web3: Web3 | null;
    walletAddress: string | null;
    connect: Connect;
    disconnect: () => void | null;
    isLoadingWallet: boolean;
}

const initialWalletContext: WalletContextProps = {
    web3: null,
    walletAddress: null,
    connect: () => null,
    disconnect: () => null,
    isLoadingWallet: true,
};

export const WalletContext = createContext<WalletContextProps>(initialWalletContext);

const provider = window.ethereum;
const noProviderError = 'No ethereum providers detected.';

const networkIds = {
    Mumbai: `0x${(80001).toString(16)}`,
    Polygon: `0x${(137).toString(16)}`,
};

const WalletProvider = ({ children }: { children: ReactNode }) => {
    const [web3, setWeb3] = useState<Web3 | null>(null);
    const [walletAddress, setWalletAddress] = useState<string | null>(null);
    const [isLoadingWallet, setIsLoadingWallet] = useState<boolean>(true);

    const connect: Connect = useCallback(async () => {
        setIsLoadingWallet(true);
        if (!provider || !provider.request) {
            setIsLoadingWallet(false);
            return { status: 'error', message: noProviderError };
        }

        let localWeb3: Web3 = new Web3(provider as any);

        if (!localWeb3) {
            setIsLoadingWallet(false);
            return { status: 'error', message: noProviderError };
        }

        try {
            const accounts = await provider.request({ method: 'eth_requestAccounts' });

            if (!accounts || !accounts.length) {
                setIsLoadingWallet(false);
                return { status: 'error', message: "Couldn't find any accounts." };
            }

            // Switch to a supported network
            try {
                await provider.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: networkIds.Mumbai }],
                });
            } catch (error: any) {
                if (error.code === 4902) {
                    try {
                        await provider.request({
                            method: 'wallet_addEthereumChain',
                            params: [{ chainId: networkIds.Mumbai }],
                        });
                    } catch (error: any) {
                        setIsLoadingWallet(false);
                        return {
                            status: 'error',
                            message: 'Please switch to the correct network.',
                        };
                    }
                }
            }

            setWeb3(localWeb3);
            setWalletAddress(accounts[0]);

            setIsLoadingWallet(false);
            return {
                status: 'success',
                data: {
                    web3: localWeb3,
                    account: accounts[0],
                },
            };
        } catch (error: any) {
            return {
                status: 'error',
                message:
                    "We're having some issues connecting to your wallet. Please try again later.",
            };
        }
    }, []);

    const disconnect = useCallback(() => {
        setWeb3(null);
        setWalletAddress(null);
    }, []);

    useEffect(() => {
        if (!provider) {
            return;
        }

        const handleAccountsChanged = (accounts: Array<string>) => {
            setWalletAddress(accounts[0]);
            toast.success('Account changed.');
        };
        const handleChainChanged = () => {
            console.log('Web3 event: Chain Changed');
        };
        const handleConnect = () => {
            console.log('Web3 event: Connect');
        };
        const handleDisconnect = () => {
            toast.success('Wallet disconnected.');
        };

        provider.on('accountsChanged', handleAccountsChanged);
        provider.on('chainChanged', handleChainChanged);
        provider.on('connect', handleConnect);
        provider.on('disconnect', handleDisconnect);

        return () => {
            provider.removeListener('accountsChanged', handleAccountsChanged);
            provider.removeListener('chainChanged', handleChainChanged);
            provider.removeListener('connect', handleConnect);
            provider.removeListener('disconnect', handleDisconnect);
        };
    }, []);

    return (
        <WalletContext.Provider
            value={{ web3, walletAddress, isLoadingWallet, connect, disconnect }}
        >
            {children}
        </WalletContext.Provider>
    );
};

export default WalletProvider;
