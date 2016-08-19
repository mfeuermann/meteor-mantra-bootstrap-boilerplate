import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Input from '../input.jsx';

storiesOf('core.Input', module)
  .add('default view', () => {
    return (
      <Input />
    );
  })
