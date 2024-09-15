export interface WrikeTask {
    id: string;
    title: string;
    accountId: string;
    status: string;
    responsibleIds: string[];
    parentIds: string[];
    createdDate: string;
    updatedDate: string;
    permalink: string;
}

export interface ResultTask {
    id: string;
    name: string;
    assignees: string[];
    status: string;
    collections: string[];
    created_at: string;
    updated_at: string;
    ticket_url: string;
}

export interface TaskConverter {
    (task: WrikeTask): ResultTask;
}

export interface WrikeProject {
    id: string;
}

export interface ResultProject {
    id: string;
    tasks: ResultTask[];
}