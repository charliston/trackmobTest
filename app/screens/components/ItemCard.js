import React from 'react';
import { Dimensions, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Image from 'react-native-image-progress';

const ItemCard = ({ onPress, story }) => {
  let { width } = Dimensions.get('window');
  const styles = StyleSheet.create({
    card:{
      width: (180 / 375) * width,
      flex: 1,
    },
    view: {
      flex: 1,
      alignSelf: 'stretch',
      padding: 10,
      backgroundColor: '#FFFFFF'
    },
    subtitle: {
      fontFamily: 'Rubik-Regular',
      fontStyle: 'normal',
      fontWeight: 'normal',
      color: '#222222',
      fontSize: 15,
      marginBottom: 10
    },
    caption: {
      fontFamily: 'Rubik-Regular',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 12,
      color: '#666666'
    },
    image:{ width: (180 / 375) * width, height: (85 / 375) * width}
  });

  return (
    <TouchableOpacity
      style={{ flex:1 }}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Card>
        <Image
          style={styles.image}
          styleName="medium-wide"
          source={{uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-10.png'}}
        />
        <View styleName="content">
          <Subtitle>Choosing The Right Boutique Hotel For You</Subtitle>
          <Caption>21 hours ago</Caption>
        </View>
      </Card>
    </TouchableOpacity>
  )
};

ItemCard.propTypes = {
  onPress: PropTypes.func.isRequired,
  story: PropTypes.object.isRequired
};

export default ItemCard;
