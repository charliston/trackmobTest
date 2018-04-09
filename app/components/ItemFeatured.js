import React from 'react';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { TouchableOpacity, ImageBackground, Tile, Title, Divider, Subtitle } from '@shoutem/ui';

const ItemFeatured = ({ onPress, product }) => {

  let { width } = Dimensions.get('window');

  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={onPress} >
      <ImageBackground
        style={{ width, height: (238 / 375) * width }}
        source={{ uri: product.imageUrl }}
      >
        <Tile>
          <Title styleName="md-gutter-bottom">{product.title}</Title>
          <Subtitle styleName="sm-gutter-horizontal collapsible" numberOfLines={3}>$ {product.price}</Subtitle>
        </Tile>
      </ImageBackground>
      <Divider styleName="line" />
    </TouchableOpacity>
  )
};

ItemFeatured.propTypes = {
  onPress: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired
};

export default ItemFeatured;