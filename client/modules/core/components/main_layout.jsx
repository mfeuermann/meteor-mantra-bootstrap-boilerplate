import React from 'react';

import Menu from '../containers/top_menu.js';

import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import Login from '../containers/login';
import Status from '../containers/status';

var Layout = React.createClass({

  render() {

    const {loggedIn, status, content = () => null } = this.props;

    var result;

    // zkontrolujeme si jestli je uzivatel prihlaseny
    if (loggedIn) {
      // pokud je prihlaseny, kontrolujeme jestli existuje spojeni se serverem
      if (status !== 'waiting') {
        result = (<div>
          <Menu />
          <div>

        <Grid fluid>
          <Row>
            <Col xs={18} md={12}>{content()}</Col>
          </Row>
        </Grid>
          </div>
        </div>);
      // pokud neexistuje spojeni se serverem
      } else {
        result = (<div>

          <Menu />
          <div>
         <Status/>

        <Grid fluid>
          <Row>
            <Col xs={18} md={12}>{content()}</Col>
          </Row>
        </Grid>
          </div>
        </div>);
      }
    // pokud uzivatel neni prihlasen
    } else {
      result = <Login/>;
    }

    // vypiseme vysledek resultu!
    return (
      <div>
        {result}

      </div>
    );
  }
});

export default Layout;
