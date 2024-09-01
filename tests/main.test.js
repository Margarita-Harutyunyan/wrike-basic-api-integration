const WrikeConverter = require('../converter/WrikeConverter');
const axios = require('axios');
const fs = require('fs');
const { fetchAndConvertTasks } = require('../main');

jest.mock('axios');
jest.mock('fs');

describe('Main script tests', () => {
    test('should fetch tasks and write them to a file', async () => {
        const mockData = {
        data: {
            data: [
                {
                    id: 'task123',
                    title: 'Test Task',
                    accountId: 'user456',
                    importance: 'Normal',
                    parentIds: ['parent789'],
                    createdDate: '2024-08-20',
                    updatedDate: '2024-08-21',
                    permalink: 'http://example.com/task/123',
                },
            ],
        },
        };

        axios.get.mockResolvedValue(mockData);
        const writeFileMock = jest.spyOn(fs, 'writeFile').mockImplementation((path, data, callback) => callback(null));

        await fetchAndConvertTasks();

        expect(axios.get).toHaveBeenCalledWith('https://www.wrike.com/api/v4/tasks?fields=["parentIds"]', expect.any(Object));
        expect(writeFileMock).toHaveBeenCalledWith(
        'tasks.json',
        expect.any(String),
        expect.any(Function)
        );
    });
});
