import { apiClient } from './apiClient';
import { WrikeTask } from '../interfaces';

export const fetchTasksByProjectId = async (token: string, projectId: string): Promise<WrikeTask[]> => {
    const response = await apiClient.get<{ data: WrikeTask[] }>(`/folders/${projectId}/tasks`, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
        params: {
            fields: 'responsibleIds,parentIds'
        }
    });
    return response.data.data;
};
