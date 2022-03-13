export const buildQueryString = (params: Object) => {
    return Object.entries(params)
        .map(([k, v]) => `${k}=${v}`)
        .join('&');
};
