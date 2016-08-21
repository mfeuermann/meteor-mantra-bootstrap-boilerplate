import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';

// import Status from '../containers/status';

const TopMenu = React.createClass({

  logout() {
    const {logoutAction} = this.props;
    logoutAction();
  },

  render() {

    return (
  <div>
      <div className='topMenuUpper2'>
      <Navbar fluid>
        <Navbar.Header>
          <Navbar.Brand>
            TEMPLATE APP
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={2} href="/">LINK1</NavItem>
            <NavItem eventKey={1} href="/">LINK2</NavItem>
          </Nav>
          <Nav pullRight>
              <NavDropdown eventKey={4} title="CONFIGURATION" id="basic-nav-dropdown">
                <MenuItem eventKey={4.2} href="/users/">Users management</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={4.5}>Separated link</MenuItem>
              </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    </div>
    );
  }
});

export default TopMenu;
