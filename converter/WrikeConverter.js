const TaskConverter = require('./TaskConverter');

class WrikeConverter extends TaskConverter {
    getId() {
        // console.log('entered get id');
        // console.log('this.task = ', this.task); // undefined
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
        return this.task.parentIds || '';
    }

    getCreatedAt() {
        return this.task.createdDate || '';
    }

    getUpdatedAt() {
        return this.task.updateDate || '';
    }

    getTicketURL() {
        return this.task.permalink || '';
    }
}

module.exports = WrikeConverter;
