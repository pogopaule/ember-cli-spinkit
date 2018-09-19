'use strict';

var path = require('path');
var fs   = require('fs');
var chalk = require('chalk');

module.exports = {
  name: 'ember-cli-spinkit',
  blueprintsPath: function() {
    return __dirname + '/blueprints';
  },
  included: function(app) {
    var cssPath = 'vendor/ember-cli-spinkit/styles/';
    if(fs.existsSync(cssPath)) {
      var files = fs.readdirSync(cssPath);
      files.forEach(function(file) {
        app.import(cssPath + file);
      });
    } else {
      console.warn(chalk.yellow("You have installed ember-cli-spinkit but you didn't run 'ember generate spinkit-<name of spinner>' yet. See https://github.com/pogopaule/ember-cli-spinkit for more information."));
    }
  },
  treeForTemplates: function() {
    var treePath = path.join('vendor', 'ember-cli-spinkit', 'templates');
    if (fs.existsSync(treePath)) {
      return this.treeGenerator(treePath);
    }
  }
};
