import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import RoleList from '../role_list.jsx';

storiesOf('users.RoleList', module)
  .add('default view', () => {
    return (
      <RoleList />
    );
  })
