const TaskConverter = require('./TaskConverter');

class WrikeConverter extends TaskConverter {
    getId() {
        return this.task.id || '';
    }

    getName() {
        return this.task.title || '';
    }
  
    getAssignee() {
        return this.task.accountId || '';
    }

    getStatus() {
        return this.task.importance || '';
    }

    getCollections() {
        return this.task.parentIds || [];
    }

    getCreatedAt() {
        return this.task.createdDate || '';
    }

    getUpdatedAt() {
        return this.task.updatedDate || '';
    }

    getTicketURL() {
        return this.task.permalink || '';
    }
}

module.exports = WrikeConverter;
