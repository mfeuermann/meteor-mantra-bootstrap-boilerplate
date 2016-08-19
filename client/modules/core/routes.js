import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './containers/main_layout.js';
import Home from './components/home.jsx';
import NotFound from './components/not_found.jsx';

export default function (injectDeps, {FlowRouter}) {


  FlowRouter.route('/', {
    name: 'home',
    action() {
      const MainLayoutCtx = injectDeps(MainLayout);
      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });

  FlowRouter.notFound = {
    action() {
      const MainLayoutCtx = injectDeps(MainLayout);
      mount(MainLayoutCtx, {
        content: () => (<NotFound />)
      });
    }
  };
}
