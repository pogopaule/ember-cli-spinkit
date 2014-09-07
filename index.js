var path = require('path'),
    fs = require('fs');

function EmberCLISpinKit(project) {
  this.project = project;
  this.name = 'ember-cli-spinkit';
}

EmberCLISpinKit.prototype.treeFor = function(name) {
  var treePath = path.join('node_modules', 'ember-cli-spinkit', 'trees', name);
  if (fs.existsSync(treePath)) {
    return unwatchedTree(treePath);
  }
};

EmberCLISpinKit.prototype.included = function included(app) {
  this.app = app;
  this.app.import('vendor/ember-cli-spinkit/styles/styles.css');
};

function unwatchedTree(dir) {
  return {
    read: function() {
      return dir;
    },
    cleanup: function() {}
  };
}

module.exports = EmberCLISpinKit;
