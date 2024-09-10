import { config } from 'dotenv';
import fs from 'fs';
import { fetchProjects } from './api/projectApi';
import { fetchTasksByProjectId } from './api/taskApi';
import { WrikeProject, WrikeTask, ResultTask, ResultProject } from './interfaces';
import { wrikeConverter } from './converter/WrikeConverter';

config(); 

const main = async () => {
    const token = process.env.WRIKE_API_TOKEN;
    if (!token) {
        throw new Error('WRIKE_API_TOKEN is not defined');
    }

    try {
        // 1. Fetch all projects
        const projects: WrikeProject[] = await fetchProjects(token);

        // 2. For each project, fetch the tasks and convert them
        const resultProjects: ResultProject[] = await Promise.all(projects.map(async (project) => {
            // Fetch tasks for the current project
            const tasks: WrikeTask[] = await fetchTasksByProjectId(token, project.id);

            // Convert WrikeTask to ResultTask
            const resultTasks: ResultTask[] = tasks.map(wrikeConverter);

            // Return ResultProject for this project
            return {
                id: project.id,
                tasks: resultTasks
            };
        }));

        // 3. Write the resultProjects to a file
        fs.writeFile('tasks.json', JSON.stringify(resultProjects, null, 2), (err) => {
            if (err) {
                console.error('Error writing to file:', err);
            } else {
                console.log('Successfully wrote to file');
            }
        });

    } catch (error) {
        console.error('Error occurred:', error);
    }
};

main();
