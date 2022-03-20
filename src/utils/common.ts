export const buildQueryString = (params: Object) => {
    return Object.entries(params)
        .map(([k, v]) => `${k}=${v}`)
        .join('&');
};

export const formatWalletAddress = (walletAddress: string) =>
    walletAddress.slice(0, 6) + '...' + walletAddress.slice(walletAddress.length - 3);

export const getCategoryPath = (name: string) =>
    `category/${name.toLocaleLowerCase().replace(' ', '-')}`;
