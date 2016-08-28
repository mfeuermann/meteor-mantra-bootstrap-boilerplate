import React from 'react';
import moment from 'moment';
import ModalAddOrEditUser from '../containers/modal_add_or_edit_user';

import RoleList from '../containers/role_list';

const UserList = ({users}) => (
  <div>

    <table className="table table-bordered">
    <thead>
      <tr>
        <th>Username</th>
        <th>Name</th>
        <th>Surname</th>
        <th>Role</th>
        <th>Online</th>
        <th>Last login</th>
        <th>IP</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {users.map(function (object) {
        return (
          <tr key={object._id}>
            <td>{object.username}</td>
            <td>{object.profile.name}</td>
            <td>{object.profile.surname}</td>
            <td><RoleList userObj={object}/></td>
            <td>{object.status ? object.status.online ? 'OK' : null : null}</td>
            <td>{object.status ? object.status.lastLogin ? object.status.lastLogin.date ? moment(object.status.lastLogin.date).format('DD.MM.YYYY') : null : null : null}</td>
            <td>{object.status ? object.status.lastLogin ? object.status.lastLogin.ipAddr ? object.status.lastLogin.ipAddr : null : null : null}</td>
            <td><ModalAddOrEditUser label='EDIT' user={object}/></td>
          </tr>
          );
      })}

    </tbody>
  </table>

  </div>
);

export default UserList;
