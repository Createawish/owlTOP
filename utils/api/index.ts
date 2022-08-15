import axios from 'axios';

export const API_URL =`${process.env.NEXT_PUBLIC_API}/api/v2.2`;

const http = axios.create({
    headers: {
        'X-API-KEY': 'abf602c5-cccb-4169-8eb8-506f462e064d',
        'Content-Type': 'application/json',
    },
    baseURL: API_URL
});

export default http;
