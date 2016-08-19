import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import MultiCheckBoxSet from '../multi_check_box_set.jsx';

storiesOf('core.MultiCheckBoxSet', module)
  .add('default view', () => {
    return (
      <MultiCheckBoxSet />
    );
  })
