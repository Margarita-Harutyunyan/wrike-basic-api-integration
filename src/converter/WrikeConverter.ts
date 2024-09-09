import { WrikeTask, TaskResult, TaskConverter } from '../interfaces';

export const wrikeConverter: TaskConverter = (task: WrikeTask): TaskResult => {
    return {
        id: task.id,
        name: task.title,
        assignee: task.accountId,
        status: task.importance,
        collections: task.parentIds,
        created_at: task.createdDate,
        updated_at: task.updatedDate,
        ticket_url: task.permalink
    };
};
