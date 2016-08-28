import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Dashboard from '../components/dashboard.jsx';

export const composer = ({context, clearErrors}, onData) => {
  const {LocalState, Meteor, Collections} = context();

  if (Meteor.subscribe('users.listAll').ready()) {

    const users = Collections.Users.find({}).fetch();
    const chyba = LocalState.get('CHYBA');

    onData(null, {users, chyba});

  } else {

    onData(null);

  }
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  clearErrors: actions.global.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Dashboard);
