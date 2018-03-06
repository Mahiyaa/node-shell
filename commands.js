'use strict'
let fs = require('fs');

function pwd(stdin, args, done) {
    process.stdout.write(process.cwd());
}

function date (stdin, args, done) {
    process.stdout.write(Date());
}

function ls (stdin, args, done) {
    fs.readdir('.', function (err, filenames) {
      if (err) handleErr(err);
      if (args !== '-la') { // hide dotfiles
        filenames = filenames.filter(filename => (filename[0] !== '.'));
      }
      done(filenames.join('\n'));
    });
  }
  
  function echo (stdin, args, done) {
    const output = args
    .split(' ')
    .map(arg => { // convert each $ENVIRONMENT_VAR to its value
      return (arg[0] === '$') ? process.env[arg.slice(1)] : arg;
    })
    .join(' ');
    done(output);
  }

module.exports = {
    pwd: pwd,
    date: date,
    ls: ls,
    echo: echo
};
 
