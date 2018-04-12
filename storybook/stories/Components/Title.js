import React from 'react';
import PropTypes from 'prop-types';
import { View, Title } from '@shoutem/ui';

export default function TitleFn(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Title>{props.children}</Title>
    </View>
  );
}

TitleFn.defaultProps = {
  children: null,
};

TitleFn.propTypes = {
  children: PropTypes.node,
};
