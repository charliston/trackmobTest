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

import FormInput from './Form/Input';
import FormDropdown from './Form/Dropdown';
import FormButton from './Form/Button';

import ItemCard from './Product/Card';
import ItemFeatured from './Product/Featured';
import ProductList from './Product/List';
import ProductDetail from './Product/Detail';

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

storiesOf('Form', module)
  .add('Inputs', () => (
    <FormInput />
  ))
  .add('Dropdown select', () => (
    <FormDropdown />
  ))
  .add('Button', () => (
    <FormButton buttonIcon={'save'} buttonText={'SAVE'} onPress={action('handle-submit')} />

  ))
;

edges = [];
edges[0] = {
  node: {
    id: "p1",
    title: "Nunc quis consequat diam",
    description: "Uncle Jailbird Joey? Good evening, I'm Doctor Emmett Brown. I'm standing on the parking lot of Twin Pines Mall. It's Saturday morning, October 26, 1985, 1:18 a.m. and this is temporal experiment number one. C'mon, Einy, hey hey boy, get in there, that a boy, in you go, get down, that's it. Are those my clocks I hear? Doc, look, all we need is a little plutonium. We're gonna take a little break but we'll be back in a while so, don't nobody go no where.<br/><br/>Well, bring her along. This concerns her too. Marty, this may seem a little foreward, but I was wondering if you would ask me to the Enchantment Under The Sea Dance on Saturday. Doc. I'm really gonna miss you. Doc, about the future- What?",
    price: 999.99,
    imageUrl: "https://graphiceat.com/wp-content/uploads/2017/03/PSD-soda-can.jpg",
    category: {id: "c1", title: "Cras a lacus accumsan"},
  }
};
edges[1] = {
  node: {
    id: "p2",
    title: "Cras non mauris ac est",
    description: "Uncle Jailbird Joey? Good evening, I'm Doctor Emmett Brown. I'm standing on the parking lot of Twin Pines Mall. It's Saturday morning, October 26, 1985, 1:18 a.m. and this is temporal experiment number one. C'mon, Einy, hey hey boy, get in there, that a boy, in you go, get down, that's it. Are those my clocks I hear? Doc, look, all we need is a little plutonium. We're gonna take a little break but we'll be back in a while so, don't nobody go no where.<br/><br/>Well, bring her along. This concerns her too. Marty, this may seem a little foreward, but I was wondering if you would ask me to the Enchantment Under The Sea Dance on Saturday. Doc. I'm really gonna miss you. Doc, about the future- What?",
    price: 999.99,
    imageUrl: "https://graphiceat.com/wp-content/uploads/2017/03/PSD-soda-can.jpg",
    category: {id: "c1", title: "Cras a lacus accumsan"},
  }
};
edges[2] = {
  node: {
    id: "p3",
    title: "Cras vel nibh ac elit",
    description: "Uncle Jailbird Joey? Good evening, I'm Doctor Emmett Brown. I'm standing on the parking lot of Twin Pines Mall. It's Saturday morning, October 26, 1985, 1:18 a.m. and this is temporal experiment number one. C'mon, Einy, hey hey boy, get in there, that a boy, in you go, get down, that's it. Are those my clocks I hear? Doc, look, all we need is a little plutonium. We're gonna take a little break but we'll be back in a while so, don't nobody go no where.<br/><br/>Well, bring her along. This concerns her too. Marty, this may seem a little foreward, but I was wondering if you would ask me to the Enchantment Under The Sea Dance on Saturday. Doc. I'm really gonna miss you. Doc, about the future- What?",
    price: 999.99,
    imageUrl: "https://graphiceat.com/wp-content/uploads/2017/03/PSD-soda-can.jpg",
    category: {id: "c1", title: "Cras a lacus accumsan"},
  }
};
const productList = {
  allProducts: {
    edges
  }
};

storiesOf('Product', module)
  .add('Item card', () => (
    <CenterView>
      <ItemCard onPress={action('open-product')} product={edges[0].node} />
    </CenterView>
  ))
  .add('Item featured', () => (
    <CenterView>
      <ItemFeatured onPress={action('open-product')} product={edges[0].node} />
    </CenterView>
  ))
  .add('list', () => (
    <ProductList products={productList} />
  ))
  .add('details', () => (
    <ProductDetail product={edges[0]} />
  ))
;
