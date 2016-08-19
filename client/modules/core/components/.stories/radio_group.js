import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import RadioGroup from '../radio_group.jsx';

storiesOf('core.RadioGroup', module)
  .add('default view', () => {
    return (
      <RadioGroup />
    );
  })
