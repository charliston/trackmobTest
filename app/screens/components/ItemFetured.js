import React from 'react';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { TouchableOpacity, ImageBackground, Tile, Title, Divider, Subtitle } from '@shoutem/ui';

const ItemFetured = ({ onPress, story }) => {

  let { width } = Dimensions.get('window');

  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={onPress} >
      <ImageBackground
        style={{ width, height: (238 / 375) * width }}
        source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-10.png' }}
      >
        <Tile>
          <Title styleName="md-gutter-bottom">title</Title>
          <Subtitle styleName="sm-gutter-horizontal collapsible" numberOfLines={3}>$ price</Subtitle>
        </Tile>
      </ImageBackground>
      <Divider styleName="line" />
    </TouchableOpacity>
  )
};

ItemFetured.propTypes = {
  onPress: PropTypes.func.isRequired,
  story: PropTypes.object.isRequired
};

export default ItemFetured;