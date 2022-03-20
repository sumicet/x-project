import { mainApi } from '../mainApi';

const ep = '/fundraisers';

export const queryApi = mainApi.injectEndpoints({
    endpoints: builder => ({
        // tested
        getFundraisers: builder.query<any, void>({
            query: param => `${ep}`,
        }),
    }),
    overrideExisting: false,
});

export const { useGetFundraisersQuery, useLazyGetFundraisersQuery } = queryApi;
