import { apiClient } from './apiClient';
import { WrikeProject } from '../interfaces';

export const fetchProjects = async (token: string): Promise<WrikeProject[]> => {
    const response = await apiClient.get<{ data: WrikeProject[] }>('/folders', {
        headers: {
            'Authorization': `Bearer ${token}`
        },
        params: {
            'project': true,
        }
    });
    return response.data.data;
};
