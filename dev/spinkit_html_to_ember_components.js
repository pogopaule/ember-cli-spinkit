var $ = require('cheerio'),
  find = require('findit'),
  path = require('path'),
  fs = require('fs'),
  mkdir = require('mkdirp'),
  cssParser = require('css'),
  _ = require('underscore'),

  fileOptions = {
    encoding: 'utf8'
  },
  stylesFolder = '../trees/vendor/ember-cli-spinkit/styles/',
  templatesFolder = '../trees/templates/components/';








createFolders();
fs.unlink(stylesFolder + 'styles.css');

var finder = find('./SpinKit/');

finder.on('file', function(filePath, stat) {
  if (isHTML(filePath)) {
    fs.readFile(filePath, fileOptions, function(err, fileContent) {
      var $html = $.load(fileContent),
          name = getComponentName(filePath),
          css = $html('html head style').text(),
          html = $html('html body').html();

      appendFile(stylesFolder, 'styles', '.css', prefixSelectorsInCss(css, name))
      writeFile(templatesFolder, name, '.hbs', prefixClassesInHtml(html, name));
    });
  }
});



function prefixClassesInHtml(html, prefix) {
  var $html = $.load(html);
  $html('[class]').each(function(i, elem) {
    var $elem = $(elem);
    $elem.attr('class', prefixClass($elem.attr('class'), prefix));
  });
  return $html.html();
}

function prefixClass(clazz, prefix) {
  var classParts = clazz.split(' ');
  var prefixedClassParts = _.map(classParts, function(part) {
    return prefix + '-' + part;
  });
  return prefixedClassParts.join(' ');
}

function prefixSelectorsInCss(css, prefix) {
  var parsedCss = cssParser.parse(css);
  _.each(parsedCss.stylesheet.rules, function(item) {
    if(item.type === 'rule') {
      item.selectors = _.map(item.selectors, function(selector) {
        return prefixSelector(selector, prefix);
      });
    }
  });
  return cssParser.stringify(parsedCss);
}

function prefixSelector(selector, prefix) {
  var selectorParts = selector.split(' ');
  var prefixedSelectorParts = _.map(selectorParts, function(part) {
    if(part[0] === '.') {
      return '.' + prefix + '-' + part.substring(1);
    } else {
      return part;
    }
  });
  return prefixedSelectorParts.join(' ');
}

function isHTML(file) {
  return path.extname(file) === '.html';
}

function writeFile(folder, fileName, extension, content) {
  fs.writeFile(folder + fileName + extension, content, fileOptions, function(error) {
    if (error) {
      throw error
    }
  });
}

function appendFile(folder, fileName, extension, content) {
  fs.appendFile(folder + fileName + extension, content, fileOptions, function(error) {
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
