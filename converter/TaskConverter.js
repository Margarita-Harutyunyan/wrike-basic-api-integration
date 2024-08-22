class TaskConverter {
    constructor() {
        this.task = {};
    }
  
    getId() {
        throw new Error('Not implemented');
    }

    getName() {
        throw new Error('Not implemented');
    }
  
    getAssignee() {
        throw new Error('Not implemented');
    }

    getStatus() {
        throw new Error('Not implemented');
    }

    getCollections() {
        throw new Error('Not implemented');
    }

    getCreatedAt() {
        throw new Error('Not implemented');
    }

    getUpdatedAt() {
        throw new Error('Not implemented');
    }

    getTicketURL() {
        throw new Error('Not implemented');
    }

    init(task) {
        this.result = {};
        this.task = task;
    }

    clear() {
        this.task = {};
    }
  
    // Method to convert task to the unified format
    convert(task) {
        this.init(task);

        this.result = {
            id: this.getId(),
            name: this.getName(),
            assignee: this.getAssignee(),
            status: this.getStatus(),
            collections: this.getCollections(),
            created_at: this.getCreatedAt(),
            updated_at: this.getUpdatedAt(),
            ticket_url: this.getTicketURL()
        }

        this.clear()

        return this.result;
    }
  }

module.exports = TaskConverter;
