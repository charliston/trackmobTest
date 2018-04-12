import React from 'react';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { TouchableOpacity, ImageBackground, Tile, Title, Divider, Subtitle, Overlay } from '@shoutem/ui';

const ItemFeatured = ({ onPress, product }) => {

  let { width } = Dimensions.get('window');
  const price = product.price.toFixed(2);

  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={onPress} >
      <ImageBackground
        style={{ width, height: (238 / 375) * width }}
        source={{ uri: product.imageUrl }}
      >
        <Tile>
          <Title styleName="md-gutter-bottom">{product.title}</Title>
          <Subtitle styleName="small-gutter">{product.category.title}</Subtitle>
          <Overlay styleName="solid-bright">
            <Subtitle styleName="sm-gutter-horizontal">
              ${price}
            </Subtitle>
          </Overlay>
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