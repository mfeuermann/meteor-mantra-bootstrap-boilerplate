import {useDeps, composeAll, composeWithTracker} from 'mantra-core';
import MainLayout from '../components/main_layout.jsx';

import {
  setDefaultErrorComponent,
  setDefaultLoadingComponent,
} from 'react-komposer';

const ErrorComponent = () => (<div>My Error</div>);
const LoadingComponent = () => (<div><img src='/reload.gif' width='16'/></div>);

setDefaultErrorComponent(ErrorComponent);
setDefaultLoadingComponent(LoadingComponent);

export const composer = ({context}, onData) => {

  const {Meteor} = context();

  // vlozime si vsude nastroje pro prihlasovani
  onData(null, {
    loggedIn: Boolean(Meteor.userId()),
    loggingIn: Meteor.loggingIn(),
    status: Meteor.status().status
  }
  );
};

export const depsMapper = (context) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(MainLayout);
