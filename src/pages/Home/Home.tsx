import Web3 from 'web3';

const Home = () => {
    // const { data: initialTokens } = useOneInchTokens({ chain: config.moralis.blockchain });

    const initializeWallet = () => {
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
    };

    const handleGetQuote = async () => {
        const params = {
            buyToken: 'USDT',
            sellToken: 'MATIC',
            buyAmount: '1',
        };
        const response = await fetch(
            `https://api.0x.org/swap/v1/quote?buyToken=ETH&sellToken=LINK&sellAmount=100000000000000000`
        );

        const json = await response.json();

        console.log(json);

        const web3 = initializeWallet();

        const transaction = await web3.eth.sendTransaction({
            ...json,
            from: '0xca056Fc710F638d48FF6129C9F57FD691b2c73f6',
        });

        console.log(transaction);
    };

    return (
        <div>
            <button onClick={handleGetQuote}>get quote</button>
        </div>
    );
};

export default Home;
