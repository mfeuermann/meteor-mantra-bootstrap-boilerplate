import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Select from '../select.jsx';

storiesOf('core.Select', module)
  .add('default view', () => {
    return (
      <Select />
    );
  })
