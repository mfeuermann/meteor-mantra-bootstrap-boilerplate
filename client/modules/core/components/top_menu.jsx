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

    // @TODO Pripravit blok pomoci ktereho zobrazime rolim specificke casti

    const {aktualniServerovyCas} = this.props;
    const yeld = this;
    return (
  <div>
      <div className='topMenuUpper1'>
        <span> ViE verze 3.0.0 | {aktualniServerovyCas.format('HH:mm:ss')} | MAREK FEUERMANN | ADMINISTRÁTOR |</span>
      </div>
      <div className='topMenuUpper2'>
      <Navbar fluid>
        <Navbar.Header>
          <Navbar.Brand>
            ViE
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={2} href="/ece">ECE</NavItem>
            <NavItem eventKey={1} href="/zdroj">ZDROJ</NavItem>
          </Nav>
          <Nav pullRight>
             <a href="/"><img src='/logo_eon.gif' width='90'></img></a>
              <NavDropdown eventKey={4} title="KONFIGURACE ViE" id="basic-nav-dropdown">
                <MenuItem eventKey={4.1}>Konfigurace ViE</MenuItem>
                <MenuItem eventKey={4.2} href='/zdroj-konfigurace/'>Konfigurace zdrojů</MenuItem>
                <MenuItem eventKey={4.3}>Konfigurace reportů</MenuItem>
                <MenuItem eventKey={4.4} href="/uzivatele/">Konfigurace uživatelů</MenuItem>
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
