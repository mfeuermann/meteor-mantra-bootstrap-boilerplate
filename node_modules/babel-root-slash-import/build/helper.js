'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function (path) {
  var BabelRootImportHelper = function () {
    function BabelRootImportHelper() {
      _classCallCheck(this, BabelRootImportHelper);

      this.root = global.rootPath || process.cwd();
    }

    _createClass(BabelRootImportHelper, [{
      key: 'transformRelativeToRootPath',
      value: function transformRelativeToRootPath(path, rootPathSuffix) {
        if (this.hasRoot(path)) {
          var withoutRoot = path.substring(1, path.length);
          return '' + this.root + (rootPathSuffix ? rootPathSuffix : '') + '/' + withoutRoot;
        }
        if (typeof path === 'string') {
          return path;
        }
        throw new Error('ERROR: No path passed');
      }
    }, {
      key: 'hasRoot',
      value: function hasRoot(string) {
        var containsTilde = false;

        if (typeof string !== 'string') {
          return false;
        }

        var firstChar = string.substring(0, 1);
        return firstChar === '/';
      }
    }]);

    return BabelRootImportHelper;
  }();

  return new BabelRootImportHelper();
};

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }