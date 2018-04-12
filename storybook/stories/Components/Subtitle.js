import React from 'react';
import PropTypes from 'prop-types';
import { View, Subtitle } from '@shoutem/ui';

export default function SubtitleFn(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Subtitle>{props.children}</Subtitle>
    </View>
  );
}

SubtitleFn.defaultProps = {
  children: null,
};

SubtitleFn.propTypes = {
  children: PropTypes.node,
};
