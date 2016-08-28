import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/containers/main_layout.js';
import Dashboard from './containers/dashboard.js';


export default function (injectDeps, {FlowRouter, Sc}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/users/', {
    name: 'USERS',
    action() {
      Sc.addTitleDescription('USERS MANAGEMENT','Users management description');

      mount(MainLayoutCtx, {
        content: () => (<Dashboard/>)
      });
    }
  });
}
