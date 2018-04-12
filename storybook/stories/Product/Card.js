import React from 'react';
import PropTypes from 'prop-types';
import ItemCard from '../../../app/components/ItemCard';

export default function Card(props) {
  return (
    <ItemCard onPress={props.onPress} product={props.product} />
  );
}

Card.defaultProps = {
  product: null,
  onPress: () => {},
};

Card.propTypes = {
  product: PropTypes.object,
  onPress: PropTypes.func,
};
