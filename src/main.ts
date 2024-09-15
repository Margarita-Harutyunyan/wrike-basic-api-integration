import { config } from 'dotenv';
import { fetchProjects } from './api/projectApi';
import { fetchTasks } from './api/taskApi';
import { fetchUsers } from './api/userApi';
import { WrikeProject, WrikeTask, ResultTask, ResultProject, WrikeUser, ResultUser } from './interfaces';
import { writeFilePromise } from './fileUtils';

config(); 


async function main(): Promise<void> {
    const token = process.env.WRIKE_API_TOKEN;
    if (!token) {
        throw new Error('WRIKE_API_TOKEN is not defined');
    }

    try {
        const [projects, tasks, users] = await Promise.all([
            fetchProjects(token),
            fetchTasks(token),
            fetchUsers(token)
        ]);

        const resultProjects: ResultProject[] = projects.map((project: WrikeProject): ResultProject => {
            const FilteredTasks: WrikeTask[] = tasks.filter((task) => {
                return task.parentIds.includes(project.id);
            });

            const ResultTasks = FilteredTasks.map((task: WrikeTask): ResultTask => {
                const FilteredUsers: WrikeUser[] = users.filter((user) => {
                    return task.responsibleIds.includes(user.id);
                });

                const ResultUsers: ResultUser[] = FilteredUsers.map((user: WrikeUser): ResultUser => {
                    return {
                        id: user.id,
                        first_name: user.firstName,
                        last_name: user.lastName,
                        type: user.type,
                        title: user.type,
                        email: user.primaryEmail
                    }
                });

                return {
                    id: task.id,
                    name: task.title,
                    status: task.status,
                    created_at: task.createdDate,
                    updated_at: task.updatedDate,
                    ticket_url: task.permalink,
                    assignees: ResultUsers
                }
            });

            return {
                id: project.id,
                title: project.title,
                description: project.description,
                created_at: project.createdDate,
                updated_at: project.updatedDate,
                tasks: ResultTasks
            }
        });

        await writeFilePromise('tasks.json', JSON.stringify(resultProjects, null, 2));
        console.log('Successfully wrote to file');
    } catch (error) {
        console.error('Error occured:', error);
    }
};

main();
