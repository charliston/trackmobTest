import React from 'react';
import PropTypes from 'prop-types';
import { ProductList } from '../../../app/screens/ProductList';

export default function List(props) {
  const relay = {
    hasMore: () => { return false },
    isLoading: () => { return false },
  };

  const navigation = {
    navigate: () => {}
  };

  return (
    <ProductList viewer={props.products} relay={relay} navigation={navigation} />
  );
}

List.defaultProps = {
  products: null,
  onPress: () => {},
};

List.propTypes = {
  products: PropTypes.object,
  onPress: PropTypes.func,
};
