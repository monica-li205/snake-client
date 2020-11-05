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
      connection.write('Move: up');
    } else if (key === 's') {
      connection.write('Move: down');
    } else if (key === 'd') {
      connection.write('Move: right');
    } else if (key === 'a') {
      connection.write('Move: left');
    } else if (key === 'p') {
      connection.write('Say: hewo uwu');
    }
  });
  
}
module.exports = setupInput;