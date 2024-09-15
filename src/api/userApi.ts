import { apiClient } from "./apiClient";
import { WrikeUser} from "../interfaces";

export const fetchUsers = async (token: string): Promise<WrikeUser[]> => {
    const response = apiClient.get<{data: WrikeUser[]}>('/contacts', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return (await response).data.data;
} 