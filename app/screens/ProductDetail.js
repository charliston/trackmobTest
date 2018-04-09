import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { Screen, ImageBackground, Tile, Title, Overlay, Subtitle, View, Text } from '@shoutem/ui';

class ProductDetail extends Component<void, Props, any> {
  constructor(props) {
    super(props);

    // Event Listener for orientation changes
    Dimensions.addEventListener('change', () => {
      this.setState({
        orientation: (Dimensions.get('screen').height >= Dimensions.get('screen').width) ? 'portrait' : 'landscape',
      });
    });
  }
  render() {
    let { width } = Dimensions.get('window');

    return (
      <Screen>
        <ImageBackground
          styleName="large-banner"
          style={{ width, height: (238 / 375) * width }}
          source={{ uri: this.props.navigation.state.params.imageUrl }}
        >
          <Tile>
            <Title styleName="md-gutter-bottom">{this.props.navigation.state.params.title}</Title>
            <Subtitle styleName="small-gutter">{this.props.navigation.state.params.category.title}</Subtitle>
            <Overlay styleName="solid-bright">
              <Subtitle styleName="sm-gutter-horizontal">$ {this.props.navigation.state.params.price}</Subtitle>
            </Overlay>
          </Tile>
        </ImageBackground>
        <View style={{margin:10}}>
          <Text>
            {this.props.navigation.state.params.description}
          </Text>
        </View>
      </Screen>
    )
  }
}

export default ProductDetail;