const connect = require('./client');
const setupInput = require('./input');

console.log('Connecting ...');
let data = connect();
setupInput(data);