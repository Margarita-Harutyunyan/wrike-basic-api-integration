require('dotenv').config();
const axios = require('axios');
const fs = require('fs');
const WrikeConverter = require('./converter/WrikeConverter');

const token = process.env.WRIKE_API_TOKEN;
const url = 'https://www.wrike.com/api/v4/tasks?fields=["parentIds"]';


axios.get(url, {
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
})
  .then(response => {
    const converter = new WrikeConverter();
    let tasks = [];

    for (let obj of response.data.data) {
      let task = converter.convert(obj);
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
  })
  .catch(error => {
    console.error('There was an error with the axios request:', error);
  });
