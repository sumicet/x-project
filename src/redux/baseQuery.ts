import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { config } from '../config';

const baseQuery = fetchBaseQuery({
    baseUrl: config.firebase.databaseURL,
    prepareHeaders: (headers, { getState }) => {
        return headers;
    },
});

export default baseQuery;
