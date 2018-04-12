import React from 'react';
import PropTypes from 'prop-types';
import HeaderButton  from '../../../app/components/HeaderButton';

export default function Button(props) {
  return (
    <HeaderButton buttonImage={props.image} onPress={props.onPress} />
  );
}

Button.defaultProps = {
  image: null,
  onPress: () => {},
};

Button.propTypes = {
  image: PropTypes.string,
  onPress: PropTypes.func,
};
