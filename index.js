const core = require('@actions/core');
const moment = require('moment');
const myVariable = 'Hello World'; 
try {
  const name = core.getInput('name');
  console.log(`Hello, ${name}. We appreciate your business!`);
  const timestamp = moment().format();
  console.log(`Greeting issued at: ${timestamp}`);
  core.setOutput("timestamp", timestamp);
} catch (error) {
  core.setFailed(error.message);
}