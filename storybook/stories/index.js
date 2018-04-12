import React from 'react';

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

import Icon from './Components/Icon';
import Title from './Components/Title';
import Subtitle from './Components/Subtitle';
import Caption from './Components/Caption';
import Text from './Components/Text';
import Loading from '../../app/components/Loading'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Header', module)
  .add('title', () => (
    <HeaderTitle />
  ))
  .add('with back button', () => (
    <HeaderLeftTitle />
  ))
  .add('with action button', () => (
    <HeaderTitleRight />
  ))
  .add('with back and action buttons', () => (
    <HeaderLeftTitleRight />
  ))
  .add('action buttons', () => (
    <CenterView>
      <HeaderButton image={'add'} />
      <HeaderButton image={'edit'} />
      <HeaderButton image={'delete'} />
      <HeaderButton image={'book'} />
      <HeaderButton image={'shopping-cart'} />
    </CenterView>
  ))
;

storiesOf('Components', module)
  .add('Font icon', () => (
    <CenterView>
      <Icon buttonImage={'watch'} color={'#999'} size={10} />
      <Icon buttonImage={'help'} color={'#f00'} size={20} />
      <Icon buttonImage={'done'} color={'#123'} size={30} />
      <Icon buttonImage={'grade'} color={'#008'} size={40} />
    </CenterView>
  ))
  .add('Title', () => (
    <CenterView>
      <Title>Lorem ipsum dolor sit amet</Title>
    </CenterView>
  ))
  .add('Subtitle', () => (
    <CenterView>
      <Subtitle>Donec malesuada nisl eget felis imperdiet faucibus</Subtitle>
    </CenterView>
  ))
  .add('Caption', () => (
    <CenterView>
      <Caption>Nunc vulputate ante sit amet tellus aliquam</Caption>
    </CenterView>
  ))
  .add('Text', () => (
    <CenterView>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quam ante, bibendum molestie eleifend a, scelerisque ac neque. Nam in laoreet ante, eu fringilla turpis. Cras imperdiet a diam nec imperdiet. Donec ut ex egestas, volutpat lectus ac, scelerisque ligula. Morbi nibh sapien, ornare vel maximus in, fermentum at dui. Donec risus nunc, tristique elementum mollis vel, maximus in tellus. Cras eget fermentum nisl.</Text>
    </CenterView>
  ))
  .add('Loading', () => (
    <Loading isLoading={true} />
  ))
;


/*
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
*/
