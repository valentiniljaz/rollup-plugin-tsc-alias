'use strict'

const cp = require('child_process')

module.exports = function() {
  return {
    name: 'tscAlias',
    writeBundle() {
      return new Promise((resolve, reject) => {
        cp.exec("tsc-alias", function callback(error, stdout, stderr) {
            if (stderr || error) {
                reject(stderr || error);
            } else {
                resolve(stdout);
            }
        });
      });
    },
  }
}
