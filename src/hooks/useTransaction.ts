import { useWeb3 } from './useWeb3';

export const useTransaction = () => {
    const getWeb3 = useWeb3();

    const execute = async () => {
        // const url = 'https://polygon-mumbai.g.alchemy.com/v2/Q_Q9blw_1RxAeagSaTjghocZpPCsrutm';
        const web3 = await getWeb3();

        try {
            const accounts = await web3.eth.getAccounts();

            const fromAddress = accounts[0];
            const toAddress = '0xcf3AF0B1Aa5b6C143dcaf48Ff3C893C53744cD8C';

            await web3.eth.sendTransaction({
                from: fromAddress,
                to: toAddress,
                value: '100000000000000',
            });
        } catch (error: any) {
            console.log(error);
        }
    };

    return execute;
};
