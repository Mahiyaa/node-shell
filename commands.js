let fs = require('fs');

module.exports = {
    pwd: function() {
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
            process.stdout.write(__dirname.toString());
            // process.stdout.write('\nprompt > ');
          },
    ls: function() {
        fs.readdir('.', function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
              process.stdout.write(file.toString() + "\n");
            })
            process.stdout.write("prompt > ");
          });
    },
    echo: function() {
        process.stdout.write()
    }        
}

