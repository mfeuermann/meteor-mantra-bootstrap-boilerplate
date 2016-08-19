import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Login from '../components/login.jsx';

export const composer = ({context, clearErrors}, onData) => {

  const {Meteor, Collections, LocalState} = context();
  const chyba = LocalState.get('CHYBA');
  onData(null, {chyba});

  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  checkLoginAction: actions.login.checkLogin,
  clearErrors: actions.global.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Login);
