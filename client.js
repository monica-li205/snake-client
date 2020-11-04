const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542

  });
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log(data);
  });
  conn.on('connect', ()=> {
    console.log('Successfully connected to game server');
    conn.write('Name: CAT');
    // setInterval(() => {
      // conn.write('Move: up');
    // }, 50);
  //   setTimeout(() => {
  //     conn.write('Move: up');
  //   }, 100);
  //   setTimeout(() => {
  //     conn.write('Move: up');
  //   }, 150);
  //   setTimeout(() => {
  //     conn.write('Move: up');
  //   }, 200);
  //   setTimeout(() => {
  //     conn.write('Move: up');
  //   }, 250)
  //   setTimeout(() => {
  //     conn.write('Move: up');
  //   }, 300)
  })

  return conn;
}

module.exports = connect;