import React from 'react';
import PropTypes from 'prop-types';
import { ProductDetail } from '../../../app/screens/ProductDetail';

export default function List(props) {
  const relay = {
    hasMore: () => { return false },
    isLoading: () => { return false },
  };

  const navigation = {
    navigate: () => {}
  };

  return (
    <ProductDetail query={props.product} relay={relay} navigation={navigation} />
  );
}

List.defaultProps = {
  product: null,
  onPress: () => {},
};

List.propTypes = {
  product: PropTypes.object,
  onPress: PropTypes.func,
};
