const tscAlias = require('tsc-alias');

module.exports = function() {
    return {
      name: 'tscAlias',
      async writeBundle(options) {
        return tscAlias.replaceTscAliasPaths(options);
      }
    }
  }
  