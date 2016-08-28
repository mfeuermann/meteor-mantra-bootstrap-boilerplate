import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ModalAddOrEditUser from '../components/modal_add_or_edit_user.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  addOrEditUser: actions.users.addOrEditUser,
  delUser: actions.users.delUser,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ModalAddOrEditUser);
