const tscAlias = require('tsc-alias');

module.exports = function (options) {
  return {
    name: 'tscAlias',
    async writeBundle() {
      return tscAlias.replaceTscAliasPaths(options);
    },
  };
};
