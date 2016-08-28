import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import RoleList from '../components/role_list.jsx';

export const composer = ({context, userObj}, onData) => {
  const {Meteor, Collections} = context();

  // on this place is definition of roles in system
  // can by stored in db

  const roles = [ 'ADMINISTRATOR', 'MANAGER', 'EDITOR' ];
  onData(null, {userObj, roles});
};

export const depsMapper = (context, actions) => ({
  priraditRole: actions.users.priraditRole,
  odebratRole: actions.users.odebratRole,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(RoleList);
