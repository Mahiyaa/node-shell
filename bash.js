const chalk = require('chalk');
const ourCommands = require('./commands');
const prompt = chalk.blue('\nprompt > ');

//output a prompt
process.stdout.write(prompt);
// STDIN `data` event fires after a user types in a line (inc. newline)
process.stdin.on('data', function (data) { // data is a Buffer
  let cmdGroups = data.toString().trim().split(/\s*\|\s*/g); // separate by pipe
  const unsafeCommands = getUnsafeCommands(cmdGroups);
  if (unsafeCommands.length) {
    process.stderr.write('command(s) not found: ' + unsafeCommands.join(' '));
    cmdGroups = [];
    done('');
  } else {
    execute(cmdGroups.shift()); // run the first command-arg set in this line
  }
});

function getUnsafeCommands (cmdStrings) {
  return cmdStrings
  .map(cmdString => cmdString.split(' ')[0]) // remove arguments (ES6 arrow)
  .filter(cmd => !ourCommands[cmd]); // filter down to unsafe commands
}

// run a given command
function execute (cmdGroup, lastStdout) {
  const tokens = cmdGroup.toString().trim().split(' '); // separate this cmd and its args
  const cmd = tokens[0];
  const args = tokens.slice(1).join(' ');
  ourCommands[cmd](lastStdout, args, done); // where the magic happens
}

// handle result of a command (async cannot `return`, only call more funcs)
function done (stdout) {
  if (cmdGroups.length) {
    execute(cmdGroups.shift(), stdout); // execute the next command-arg set
  } else {
    process.stdout.write(stdout + prompt);
  } 
}
