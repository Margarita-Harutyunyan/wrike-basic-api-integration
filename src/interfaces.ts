export interface WrikeTask {
    id: string;
    title: string;
    accountId: string;
    importance: string;
    parentIds: string[];
    createdDate: string;
    updatedDate: string;
    permalink: string;
};

export interface TaskResult {
    id: string;
    name: string;
    assignee: string;
    status: string;
    collections: string[];
    created_at: string;
    updated_at: string;
    ticket_url: string;
};

export interface TaskConverter {
    (task: WrikeTask): TaskResult;
};

export interface Project {
    id: string
};