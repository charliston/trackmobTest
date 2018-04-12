import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import CenterView from './CenterView';
import Welcome from './Welcome';

import HeaderButton from './Header/Button';
import HeaderLeftTitle from './Header/LeftTitle';
import HeaderLeftTitleRight from './Header/LeftTitleRight';
import HeaderTitle from './Header/Title';
import HeaderTitleRight from './Header/TitleRight';


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Components', module)
  .add('Header title', () => (
    <HeaderTitle />
  ))
  .add('Header with back button', () => (
    <HeaderLeftTitle />
  ))
  .add('Header with action button', () => (
    <HeaderTitleRight />
  ))
  .add('Header with back and action buttons', () => (
    <HeaderLeftTitleRight />
  ))
  .add('Header action buttons', () => (
    <CenterView>
      <HeaderButton image={'add'} />
      <HeaderButton image={'edit'} />
      <HeaderButton image={'delete'} />
      <HeaderButton image={'book'} />
      <HeaderButton image={'shopping-cart'} />
    </CenterView>
  ))
;

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Button onPress={action('clicked-text')}>
      <Text>Hello Button</Text>
    </Button>
  ))
  .add('with some emoji', () => (
    <Button onPress={action('clicked-emoji')}>
      <Text>😀 😎 👍 💯</Text>
    </Button>
  ));
