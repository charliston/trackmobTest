import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from '@shoutem/ui';

export default function TextFn(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{props.children}</Text>
    </View>
  );
}

TextFn.defaultProps = {
  children: null,
};

TextFn.propTypes = {
  children: PropTypes.node,
};
