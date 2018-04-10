import React from 'react';
import { StackNavigator, HeaderBackButton } from 'react-navigation';
import Loadable from 'react-loadable';
import Loading from '../components/Loading';

import HeaderButton  from '../components/HeaderButton';

const LoadableProductList = Loadable({
  loader: () => import('../screens/ProductList'),
  loading: Loading,
});

const LoadableProductDetail = Loadable({
  loader: () => import('../screens/ProductDetail'),
  loading: Loading,
});

const LoadableProductForm = Loadable({
  loader: () => import('../screens/ProductForm'),
  loading: Loading,
});

export const ProductsStack = StackNavigator({
  Products: {
    screen: LoadableProductList,
    navigationOptions: ({ navigation }) => ({
      title: 'Featured Products',
      headerRight: <HeaderButton buttonImage="add" onPress={() => navigation.navigate('ProductForm')} />,
    }),
  },
  ProductDetail: {
    screen: LoadableProductDetail,
    navigationOptions: ({ navigation }) => {
      const product = navigation.state.params;
      return {
        headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)}/>,
        title: 'Featured Products',
        headerRight: <HeaderButton buttonImage="edit" onPress={() => navigation.navigate('ProductForm', { ...product }) } />,
      }
    }
  },
  ProductForm: {
    screen: LoadableProductForm,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />,
      title: (navigation.state.params? 'Edit': 'Add') +' Product',
      headerRight: (navigation.state.params? <HeaderButton buttonImage="delete" onPress={() => navigation.state.params.deleteProduct(navigation.state.params.id)}/> : null),
    })
  },
});
