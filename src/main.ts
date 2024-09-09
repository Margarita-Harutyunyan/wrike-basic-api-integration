// src/main.ts
import axios from 'axios';
import fs from 'fs';
import { config } from 'dotenv';
import { WrikeTask, TaskResult } from './interfaces';
import { wrikeConverter } from './converter/WrikeConverter';

config();

const fetchAndConvertTasks = async (): Promise<void> => {
    const token = process.env.WRIKE_API_TOKEN;
    const url = 'https://www.wrike.com/api/v4/tasks?fields=["parentIds"]';

    try {
        const response = await axios.get<{ data: WrikeTask[] }>(url, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        const tasks: TaskResult[] = response.data.data.map(task => wrikeConverter(task));
        const data = JSON.stringify(tasks, null, 2);

        fs.writeFile('tasks.json', data, (err) => {
            if (err) {
                console.error('Error writing to file', err);
            } else {
                console.log('Successfully wrote to file');
            }
        });
    } catch (error) {
        console.error('There was an error with the axios request:', error);
    }
};


fetchAndConvertTasks();

