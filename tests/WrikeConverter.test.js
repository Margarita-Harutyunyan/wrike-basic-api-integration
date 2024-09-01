const WrikeConverter = require('../converter/WrikeConverter');

describe('WrikeConverter', () => {
    let converter;
    let mockTask;

    beforeEach(() => {
        converter = new WrikeConverter();
        mockTask = {
            id: 'task123',
            title: 'Test Task',
            accountId: 'user456',
            importance: 'Normal',
            parentIds: ['parent789'],
            createdDate: '2024-08-20',
            updatedDate: '2024-08-21',
            permalink: 'http://example.com/task/123',
        };
    });

    test('should return task id', () => {
        converter.init(mockTask);
        const id = converter.getId();
        expect(id).toBe('task123');
    });

    test('should return task name', () => {
        converter.init(mockTask);
        const name = converter.getName();
        expect(name).toBe('Test Task');
    });

    test('should return task assignee', () => {
        converter.init(mockTask);
        const assignee = converter.getAssignee();
        expect(assignee).toBe('user456');
    });

    test('should return task status', () => {
        converter.init(mockTask);
        const status = converter.getStatus();
        expect(status).toBe('Normal');
    });

    test('should return task collections', () => {
        converter.init(mockTask);
        const collections = converter.getCollections();
        expect(collections).toEqual(['parent789']);
    });

    test('should return task creation date', () => {
        converter.init(mockTask);
        const createdAt = converter.getCreatedAt();
        expect(createdAt).toBe('2024-08-20');
    });

    test('should return task updated date', () => {
        converter.init(mockTask);
        const updatedAt = converter.getUpdatedAt();
        expect(updatedAt).toBe('2024-08-21');
    });

    test('should return task ticket URL', () => {
        converter.init(mockTask);
        const ticketURL = converter.getTicketURL();
        expect(ticketURL).toBe('http://example.com/task/123');
    });

    test('should convert the task to the unified format', () => {
        const result = converter.convert(mockTask);
        expect(result).toEqual({
            id: 'task123',
            name: 'Test Task',
            assignee: 'user456',
            status: 'Normal',
            collections: ['parent789'],
            created_at: '2024-08-20',
            updated_at: '2024-08-21',
            ticket_url: 'http://example.com/task/123'
        });
    });
});
