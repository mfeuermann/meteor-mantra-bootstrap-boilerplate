import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Status from '../components/status.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  const status = Meteor.status();
  console.log(status);

  onData(null, {status});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Status);
