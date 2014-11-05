var path = require('path');
var fs   = require('fs');

module.exports = {
  name: 'ember-cli-spinkit',
  blueprintsPath: function() {
    return __dirname + '/blueprints';
  },
  included: function(app) {
    app.import('vendor/ember-cli-spinkit/styles/spinkit-spinner.css');
  },
  treeFor: function(name) {
    if(name === 'templates') {
      var treePath = path.join('vendor', 'ember-cli-spinkit', 'templates');
      if (fs.existsSync(treePath)) {
        return this.unwatchedTree(treePath);
      }
    }
  },
  unwatchedTree: function(dir) {
    return {
      read: function() { return dir; },
      cleanup: function() { }
    };
  }
};
