import { mainApi } from '../mainApi';
import { Fundraiser } from './types';

const ep = '/fundraisers';

export const queryApi = mainApi.injectEndpoints({
    endpoints: builder => ({
        getFundraiser: builder.query<Fundraiser, { id: string }>({
            query: param => `${ep}/${param.id}.json`,
            transformResponse: (response: any, meta, { id }) => {
                if (!response) {
                    return response;
                }

                return {
                    ...response,
                    id,
                };
            },
        }),
        getFundraisers: builder.query<Fundraiser[], void>({
            query: () => `${ep}.json`,
            transformResponse: (response: any) => {
                if (!response) {
                    return response;
                }

                const updatedResponse = [];

                for (const key in response) {
                    updatedResponse.push({
                        ...response[key],
                        id: key,
                    });
                }

                return updatedResponse;
            },
        }),
        addFundraiser: builder.mutation<any, Omit<Fundraiser, 'id'>>({
            query: body => ({
                url: `${ep}.json`,
                method: 'POST',
                body,
            }),
        }),
    }),
    overrideExisting: false,
});

export const { useAddFundraiserMutation, useGetFundraisersQuery, useGetFundraiserQuery } = queryApi;
