import React from 'react';
import PropTypes from 'prop-types';
import ItemFeatured from '../../../app/components/ItemFeatured';

export default function Featured(props) {
  return (
    <ItemFeatured onPress={props.onPress} product={props.product} />
  );
}

Featured.defaultProps = {
  product: null,
  onPress: () => {},
};

Featured.propTypes = {
  product: PropTypes.object,
  onPress: PropTypes.func,
};
