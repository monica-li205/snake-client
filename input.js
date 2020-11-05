let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput)
  return stdin;
}

const handleUserInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });

  stdin.on('data', (key) => {
    console.log(key);

    if (key === 'w') {
      //connection.stdin.write('up');
      connection.write('Move: up');
    }
  });
  
}
module.exports = setupInput;