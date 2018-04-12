import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Button(props) {
  return (
    <Icon
      name={props.buttonImage}
      size={props.size}
      color={props.color}
    />
  );
}

Button.defaultProps = {
  buttonImage: 'add',
  size: 20,
  color: '#000000',
};

Button.propTypes = {
  buttonImage: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};
