const express = require('express');

const fs = require("fs");
var process = require('process');
var cp = require('child_process');

require("./main.js");
nocache("./main.js", (module) => console.log(`${module} is now updated!`));

require("./Queen-Alexa.js");
nocache("./Queen-Alexa.js", (module) => console.log(`${module} is now updated!`))
;

var server = cp.fork('main.js');
console.log('Server started');

fs.watchFile('main.js', function (event, filename) {
    server.kill();
    console.log('Server stopped');
    server = cp.fork('main.js');
});

fs.watchFile('Queen-Alexa.js', function (event, filename) {
    server.kill();
    console.log('Server stopped');
    server = cp.fork('main.js');
});


process.on('SIGINT', function () {
    server.kill();
    fs.unwatchFile('main.js');
    console.log('Server started');
    process.exit();
});

process.on('SIGINT', function () {
    server.kill();
    fs.unwatchFile('Queen-Alexa.js');
    console.log('Server started');
    process.exit();
});


/**

 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional>
 */
function nocache(module, cb = () => {}) {
  console.log("Module", `'${module}'`, "is now being watched for changes");
  fs.watchFile(require.resolve(module), async () => {
    await uncache(require.resolve(module));
    cb(module);
  });
}


/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = ".") {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(module)];
      resolve();
    } catch (e) {
      reject(e);
    }
  });
}

const app = express();
const port = 3000;
//app.listen(port, () => console.log(`server running on http://localhost:${port}`));

