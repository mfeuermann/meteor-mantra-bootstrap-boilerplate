import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import moment from 'moment';
import { TimeSync } from 'meteor/mizzao:timesync';

import TopMenu from '../components/top_menu.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  // vygenerujeme si aktualni serverovy cas
  const aktualniServerovyCas = moment(TimeSync.serverTime());

  onData(null, {aktualniServerovyCas});
};

export const depsMapper = (context, actions) => ({
  logoutAction: actions.login.logout,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(TopMenu);
