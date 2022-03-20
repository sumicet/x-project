import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { config } from '../config';

const baseQuery = fetchBaseQuery({
    baseUrl: `${config.databaseUri}/api/v1`,
    prepareHeaders: (headers, { getState }) => {
        return headers;
    },
});

export default baseQuery;
