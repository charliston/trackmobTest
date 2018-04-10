import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Image from 'react-native-image-progress';
import { Text, Screen, TouchableOpacity, ImageBackground, Divider, Tile, Title, Subtitle, Card, View, Caption, NavigationBar, ListView, GridRow } from '@shoutem/ui';

const ItemCard = ({ onPress, product }) => {
  let { width } = Dimensions.get('window');
  const styles = StyleSheet.create({
    image:{ width: (180 / 375) * width, height: (85 / 375) * width}
  });

  return (
    <TouchableOpacity
      styleName="flexible"
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Card styleName="flexible">
        <Image
          style={styles.image}
          styleName="medium-wide"
          source={{uri: product.imageUrl}}
        />
        <View styleName="content">
          <Subtitle>{product.title}</Subtitle>
          <View styleName="horizontal v-center space-between">
            <Caption>
              {product.price.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </Caption>
            <Caption>{product.category.title}</Caption>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  )
};

ItemCard.propTypes = {
  onPress: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired
};

export default ItemCard;
