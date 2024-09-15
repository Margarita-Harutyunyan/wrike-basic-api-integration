import { apiClient } from './apiClient';
import { WrikeTask } from '../interfaces';

export const fetchTasks = async (token: string): Promise<WrikeTask[]> => {
    const response = await apiClient.get<{ data: WrikeTask[] }>(`/tasks`, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
        params: {
            fields: JSON.stringify(["responsibleIds", "parentIds"])
        }
    });
    return response.data.data;
};
