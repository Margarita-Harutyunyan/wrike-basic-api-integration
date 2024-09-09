import axios from 'axios';

export const apiClient = axios.create({
    baseURL: 'https://www.wrike.com/api/v4',
    headers: {
        'Content-Type': 'application/json',
    },
});
