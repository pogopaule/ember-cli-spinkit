var $ = require('cheerio'),
  find = require('findit'),
  path = require('path'),
  fs = require('fs'),
  mkdir = require('mkdirp'),

  fileOptions = {
    encoding: 'utf8'
  },
  stylesFolder = '../styles-addon/components/',
  templatesFolder = '../templates-addon/components/';;

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
  writeFile(stylesFolder, name, '.css', css);
  writeFile(templatesFolder, name, '.hbs', html);
}

function writeFile(folder, fileName, extension, content) {
  fs.writeFile(folder + fileName + extension, content, fileOptions, function(error) {
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
  mkdir(stylesFolder, function(error) {
    if (error) {
      throw error;
    }
  });

  mkdir(templatesFolder, function(error) {
    if (error) {
      throw error;
    }
  });
};
