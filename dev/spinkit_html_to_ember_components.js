var $ = require('cheerio'),
  find = require('findit'),
  path = require('path'),
  fs = require('fs'),
  mkdir = require('mkdirp'),

  fileOptions = {
    encoding: 'utf8'
  };

createFolders();

var finder = find('./SpinKit/');

finder.on('file', function(filePath, stat) {
  if (isHTML(filePath)) {
    fs.readFile(filePath, fileOptions, function(err, fileContent) {
      $html = $.load(fileContent);
      var css = $html('html head style').text();
      var html = $html('html body').html();
      save(css, html, getComponentName(filePath));
    });
  }
});

function isHTML(file) {
  return path.extname(file) === '.html';
}

function save(css, html, name) {
  fs.writeFile('../app/styles/components/' + name + '.css', css, fileOptions, function(error) {
    if (error) {
      throw error
    }
  });
  fs.writeFile('../app/templates/components/' + name + '.hbs', html, fileOptions, function(error) {
    if (error) {
      throw error
    }
  });
}

function getComponentName(filePath) {
  var fileNameWithoutExtension = path.basename(filePath, '.html'),
    indexOfFirstDash = fileNameWithoutExtension.indexOf('-');

  return 'spinkit-' + fileNameWithoutExtension.substring(indexOfFirstDash + 1, fileNameWithoutExtension.length);
};

function createFolders() {
  mkdir('../app/styles/components', function(error) {
    if (error) {
      throw error;
    }
  });

  mkdir('../app/templates/components', function(error) {
    if (error) {
      throw error;
    }
  });
};
