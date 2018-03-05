let commands = require('./commands');
let userCommand = 'pwd';
commands[userCommand]();

// console.log("our process is", process); //creates an object with all processes

// console.log("process two is", Object.keys(process)); //creates an array with the keys from our processes object

//STDIN === standard input && STDOUT === standard output && STDERR === error

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  let cmd = data.toString().trim(); // remove the newline

//   if(cmd === 'pwd') {
    // process.argv.forEach((val, index) => {
    //     console.log(`${val}`);
    //   });
    // process.stdout.write(process.argv[1]);
    //this gives you the filename of where you are
    //argv is the array of command line arguments 
    // The process.argv property returns an array containing the command line 
    // arguments passed when the Node.js process was launched. 
    // The first element will be process.execPath. See process.argv0 if 
    // access to the original value of argv[0] is needed. The second element will be 
    // the path to the JavaScript file being executed. The remaining elements will be any 
    // additional command line arguments.

    //********dunder dirname gives you access to the directory (in backend code) =>  ` __dirname `
//     process.stdout.write(__dirname.toString());
//   }

  if (cmd === 'date'){
    process.stdout.write(Date());
  }

  else process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');

});

//when typing in date on the command line we get the following:
//Mon Mar  5 10:49:51 EST 2018

//remember pwd is print working directory!!!

//cat => concatenates files and prints on the standard output
//head => outputs the first part of the files 
//cat | head => cat does as above and head gives as above and | is a pipeline
/*Pipelines
   A  pipeline is a sequence of one or more commands separated by one of the control operators | or |&.  The
   format for a pipeline is:

          [time [-p]] [ ! ] command [ [|⎪|&] command2 ... ]

   The standard output of command is connected  via  a  pipe  to  the  standard  input  of  command2.   This
   connection  is performed before any redirections specified by the command (see REDIRECTION below).  If |&
   is used, the standard error of command is connected to command2’s standard input through the pipe; it  is
   shorthand  for  2>&1  |.   This  implicit  redirection  of  the  standard  error  is  performed after any
   redirections specified by the command.

   The return status of a pipeline is the exit status of the last command, unless  the  pipefail  option  is
   enabled.   If  pipefail  is  enabled,  the  pipeline’s return status is the value of the last (rightmost)
   command to exit with a non-zero status, or zero if all commands exit successfully.  If the reserved  word
   !   precedes  a  pipeline, the exit status of that pipeline is the logical negation of the exit status as
   described above.  The shell waits for all commands in the pipeline to terminate before returning a value.

   If the time reserved word precedes a pipeline, the elapsed as well as user and system  time  consumed  by
   its execution are reported when the pipeline terminates.  The -p option changes the output format to that
   specified by POSIX.  When the shell is in posix mode, it does not recognize time as a  reserved  word  if
   the  next  token begins with a `-’.  The TIMEFORMAT variable may be set to a format string that specifies
   how the timing information should be displayed; see the description of TIMEFORMAT under  Shell  Variables
   below.

   When the shell is in posix mode, time may be followed by a newline.  In this case, the shell displays the
   total user and system time consumed by the shell and its children.  The TIMEFORMAT variable may  be  used
   to specify the format of the time information.

   Each command in a pipeline is executed as a separate process (i.e., in a subshell).
Message Input
*/ 