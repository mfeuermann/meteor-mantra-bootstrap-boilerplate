import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _extends from 'babel-runtime/helpers/extends';
import classNames from 'classnames';
import React from 'react';

import Dropdown from './Dropdown';
import splitComponentProps from './utils/splitComponentProps';

var propTypes = _extends({}, Dropdown.propTypes, {

  // Toggle props.
  title: React.PropTypes.node.isRequired,
  noCaret: React.PropTypes.bool,
  active: React.PropTypes.bool,

  // Override generated docs from <Dropdown>.
  /**
   * @private
   */
  children: React.PropTypes.node
});

var NavDropdown = function (_React$Component) {
  _inherits(NavDropdown, _React$Component);

  function NavDropdown() {
    _classCallCheck(this, NavDropdown);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  NavDropdown.prototype.render = function render() {
    var _props = this.props;
    var title = _props.title;
    var active = _props.active;
    var className = _props.className;
    var style = _props.style;
    var children = _props.children;

    var props = _objectWithoutProperties(_props, ['title', 'active', 'className', 'style', 'children']);

    delete props.eventKey;

    // These are injected down by `<Nav>` for building `<SubNav>`s.
    delete props.activeKey;
    delete props.activeHref;

    var _splitComponentProps = splitComponentProps(props, Dropdown.ControlledComponent);

    var dropdownProps = _splitComponentProps[0];
    var toggleProps = _splitComponentProps[1];

    // Unlike for the other dropdowns, styling needs to go to the `<Dropdown>`
    // rather than the `<Dropdown.Toggle>`.

    return React.createElement(
      Dropdown,
      _extends({}, dropdownProps, {
        componentClass: 'li',
        className: classNames(className, { active: active }),
        style: style
      }),
      React.createElement(
        Dropdown.Toggle,
        _extends({}, toggleProps, { useAnchor: true }),
        title
      ),
      React.createElement(
        Dropdown.Menu,
        null,
        children
      )
    );
  };

  return NavDropdown;
}(React.Component);

NavDropdown.propTypes = propTypes;

export default NavDropdown;