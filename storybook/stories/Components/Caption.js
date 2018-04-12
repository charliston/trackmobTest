import React from 'react';
import PropTypes from 'prop-types';
import { View, Caption } from '@shoutem/ui';

export default function CaptionFn(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Caption>{props.children}</Caption>
    </View>
  );
}

CaptionFn.defaultProps = {
  children: null,
};

CaptionFn.propTypes = {
  children: PropTypes.node,
};
