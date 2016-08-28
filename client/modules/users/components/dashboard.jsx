import React from 'react';
import {Panel, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import UserList from './user_list.jsx';

import ModalAddOrEditUser from '../containers/modal_add_or_edit_user';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }

  render() {

    const {chyba} = this.props;

    const nadpisPanelLeft = (
      <div className='clearfix'>
        <div className="pull-left">User list</div>
          <div className="pull-right">
            <ModalAddOrEditUser user='' label='ADD USER'/>
          </div>
    </div>
    );

    const {users} = this.props;

    return (
      <div>
        <div className="row">
          <div className="col-sm-12">

            <div>{chyba}</div>
            <Panel header={nadpisPanelLeft} collapsible expanded={this.state.open}>
              <UserList users={users}/>
            </Panel>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
