var $ = require('cheerio'),
  find = require('findit'),
  path = require('path'),
  fs = require('fs'),
  mkdir = require('mkdirp'),
  cssParser = require('css'),
  _ = require('underscore'),

  fileOptions = {
    encoding: 'utf8'
  };


var finder = find('./SpinKit/examples/');

finder.on('file', function(filePath) {
  if (isHTML(filePath)) {
    fs.readFile(filePath, fileOptions, function(err, fileContent) {
      var $html = $.load(fileContent),
          name = getComponentName(filePath),
          css = $html('html head style').text(),
          html = $html('html body').html();

      createBlueprint(name, css, html);
    });
  }
});

function createBlueprint(name, css, html) {
  createFolders(name);
  createFiles(name, css, html);
}

function createFolders(name) {
  mkdir.sync('../blueprints/spinkit-' + name + '/files/vendor/ember-cli-spinkit/templates/components/');
  mkdir.sync('../blueprints/spinkit-' + name + '/files/vendor/ember-cli-spinkit/styles/');
}

function createFiles(name, css, html) {
  var indexjs = 'module.exports = { normalizeEntityName: function() {} };';

  writeFile('../blueprints/spinkit-' + name + '/files/vendor/ember-cli-spinkit/templates/components/', 'spinkit-' + name, '.hbs', html);
  writeFile('../blueprints/spinkit-' + name + '/files/vendor/ember-cli-spinkit/styles/', 'spinkit-' + name, '.css', css);
  writeFile('../blueprints/spinkit-' + name + '/', 'index', '.js', indexjs);
}

function isHTML(file) {
  return path.extname(file) === '.html';
}

function writeFile(folder, fileName, extension, content) {
  fs.writeFile(folder + fileName + extension, content, fileOptions, function(error) {
    if (error) {
      throw error;
    }
  });
}

function getComponentName(filePath) {
  var fileNameWithoutExtension = path.basename(filePath, '.html'),
    indexOfFirstDash = fileNameWithoutExtension.indexOf('-');

  return fileNameWithoutExtension.substring(indexOfFirstDash + 1, fileNameWithoutExtension.length);
};
