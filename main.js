const WrikeConverter = require('./converter/WrikeConverter');
const axios = require('axios');
const fs = require('fs');
require('dotenv').config();

async function fetchAndConvertTasks() {
  const token = process.env.WRIKE_API_TOKEN;
  const url = 'https://www.wrike.com/api/v4/tasks?fields=["parentIds"]';

  try {
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    const converter = new WrikeConverter();
    const tasks = [];

    for (const obj of response.data.data) {
      const task = converter.convert(obj);
      tasks.push(task);
    }

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
}

if (require.main === module) {
  fetchAndConvertTasks();
}

module.exports = { fetchAndConvertTasks };
