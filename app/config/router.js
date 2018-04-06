import React from 'react';
import { StackNavigator, HeaderBackButton } from 'react-navigation';
import Loadable from 'react-loadable';
import Loading from '../screens/Loading';

const LoadableProductList = Loadable({
  loader: () => import('../screens/ProductList'),
  loading: Loading,
});

const LoadableProductDetail = Loadable({
  loader: () => import('../screens/ProductDetail'),
  loading: Loading,
});

export const StoriesStack = StackNavigator({
  Stories: {
    screen: LoadableProductList,
    navigationOptions: {
      title: 'Featured Products',
    },
  },
  StoriesDetail: {
    screen: LoadableProductDetail,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />,
      title: 'Featured Products',
    })
  },
});
