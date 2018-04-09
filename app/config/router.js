import React from 'react';
import { StackNavigator, HeaderBackButton } from 'react-navigation';
import Loadable from 'react-loadable';
import Loading from '../screens/Loading';

import HeaderButton  from '../components/HeaderButton';

const LoadableProductList = Loadable({
  loader: () => import('../screens/ProductList'),
  loading: Loading,
});

const LoadableProductDetail = Loadable({
  loader: () => import('../screens/ProductDetail'),
  loading: Loading,
});

export const ProductsStack = StackNavigator({
  Products: {
    screen: LoadableProductList,
    navigationOptions: ({ navigation }) => ({
      title: 'Featured Products',
      headerRight: <HeaderButton buttonImage="add" onPress={() => navigation.goBack(null)} />,
    }),
  },
  ProductDetail: {
    screen: LoadableProductDetail,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />,
      title: 'Featured Products',
      headerRight: <HeaderButton buttonImage="edit" onPress={() => navigation.goBack(null)} />,
    })
  },
});
