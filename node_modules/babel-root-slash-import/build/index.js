'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var t = _ref.types;

  var BabelRootImport = function BabelRootImport() {
    _classCallCheck(this, BabelRootImport);

    var that = this;
    return {
      visitor: {
        ImportDeclaration: function ImportDeclaration(path, state) {
          var givenPath = path.node.source.value;

          var rootPathSuffix = state && state.opts && typeof state.opts.rootPathSuffix === 'string' ? '/' + state.opts.rootPathSuffix.replace(/^(\/)|(\/)$/g, '') : '';

          if ((0, _helper2.default)().hasRoot(givenPath)) {
            path.node.source.value = (0, _helper2.default)().transformRelativeToRootPath(givenPath, rootPathSuffix);
          }
        }
      }
    };
  };

  // Here's we detect the use of Meteor and send a dummy plugin.
  // That's because, Meteor already do this for us.
  //  global.meteorBabelHelpers is something we can see when
  //  running inside Meteor.


  if (global.meteorBabelHelpers) {
    return {
      visitor: {}
    };
  }

  return new BabelRootImport();
};

var _helper = require('./helper');

var _helper2 = _interopRequireDefault(_helper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }