const TaskConverter = require('../converter/TaskConverter');

describe('TaskConverter', () => {
    let converter;

    beforeEach(() => {
        converter = new TaskConverter();
    });

    test('should initialize task and result objects', () => {
        const task = { id: '123', name: 'Test Task' };
        converter.init(task);

        expect(converter.task).toEqual(task);
        expect(converter.result).toEqual({});
    });

    test('should clear task object', () => {
        const task = { id: '123', name: 'Test Task' };
        converter.init(task);

        converter.clear();

        expect(converter.task).toEqual({});
    });

    test('should throw error when getId is not implemented', () => {
        expect(() => converter.getId()).toThrow('Not implemented');
    });

    test('should throw error when getName is not implemented', () => {
        expect(() => converter.getName()).toThrow('Not implemented');
    });

    test('should throw error when getAssignee is not implemented', () => {
        expect(() => converter.getAssignee()).toThrow('Not implemented');
    });

    test('should throw error when getStatus is not implemented', () => {
        expect(() => converter.getStatus()).toThrow('Not implemented');
    });

    test('should throw error when getCollections is not implemented', () => {
        expect(() => converter.getCollections()).toThrow('Not implemented');
    });

    test('should throw error when getCreatedAt is not implemented', () => {
        expect(() => converter.getCreatedAt()).toThrow('Not implemented');
    });

    test('should throw error when getUpdatedAt is not implemented', () => {
        expect(() => converter.getUpdatedAt()).toThrow('Not implemented');
    });

    test('should throw error when getTicketURL is not implemented', () => {
        expect(() => converter.getTicketURL()).toThrow('Not implemented');
    });

    test('should convert task using implemented methods', () => {
        const task = { id: '123', name: 'Test Task' };
        
        converter.getId = jest.fn().mockReturnValue('123');
        converter.getName = jest.fn().mockReturnValue('Test Task');
        converter.getAssignee = jest.fn().mockReturnValue('user123');
        converter.getStatus = jest.fn().mockReturnValue('In Progress');
        converter.getCollections = jest.fn().mockReturnValue(['collection1']);
        converter.getCreatedAt = jest.fn().mockReturnValue('2024-08-21');
        converter.getUpdatedAt = jest.fn().mockReturnValue('2024-08-22');
        converter.getTicketURL = jest.fn().mockReturnValue('http://example.com/ticket/123');

        const result = converter.convert(task);

        expect(result).toEqual({
            id: '123',
            name: 'Test Task',
            assignee: 'user123',
            status: 'In Progress',
            collections: ['collection1'],
            created_at: '2024-08-21',
            updated_at: '2024-08-22',
            ticket_url: 'http://example.com/ticket/123',
        });
    });
});
