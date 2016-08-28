import React from 'react';

class RoleList extends React.Component {
  constructor(props) {
    super(props);
  }

  priraditRoleAction(data) {
    const {priraditRole,userObj} = this.props;

    this.odebratRoleAction();
    if (data.currentTarget.value) {
      priraditRole(userObj._id, data.currentTarget.value);
    }
  }

  odebratRoleAction() {
    const {odebratRole, userObj} = this.props;
    odebratRole(userObj._id);
  }

  render() {
    const {userObj, roles} = this.props;
    return (
      <div>
        {userObj.roles ? userObj.roles.map(object => {
          return (
            <span style={{margin: '5px'}} className="label label-primary" key={object._id}>{object}</span>
          );
        }) : null}

        <hr/>
        <select onChange={this.priraditRoleAction.bind(this)}>
          <option value="">Select roles</option>
          {roles.map((object,i) => {
            return (
              <option key={i} value={object}>{object}</option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default RoleList;
