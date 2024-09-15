export interface WrikeTask {
    id: string;
    title: string;
    status: string;
    createdDate: string;
    updatedDate: string;
    permalink: string;
    responsibleIds: string[];
    parentIds: string[];
}

export interface ResultTask {
    id: string;
    name: string;
    status: string;
    created_at: string;
    updated_at: string;
    ticket_url: string;
    assignees: ResultUser[];
}

export interface WrikeProject {
    id: string;
    title: string;
    description: string;
    createdDate: string;
    updatedDate: string;
}

export interface ResultProject {
    id: string;
    title: string;
    description: string;
    created_at: string;
    updated_at: string;
    tasks: ResultTask[];
}

export interface WrikeUser {
    id: string;
    firstName: string;
    lastName: string;
    type: string;
    title: string;
    primaryEmail: string;
}

export interface ResultUser {
    id: string;
    first_name: string;
    last_name: string;
    type: string;
    title: string;
    email: string
}