import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from '../baseQuery';

export const mainApi = createApi({
    reducerPath: 'mainApi',
    baseQuery,
    keepUnusedDataFor: 60,
    // refetchOnMountOrArgChange: 30,
    endpoints: () => ({}),
});
