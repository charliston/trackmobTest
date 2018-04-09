import React, { Component } from 'react';
import { I18nManager, Platform, StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Icon from 'react-native-vector-icons/MaterialIcons';


class HeaderButton extends Component<>{
  static defaultProps = {
    pressColorAndroid: 'rgba(0, 0, 0, .32)',
    tintColor: Platform.select({
      ios: '#037aff',
    }),
    truncatedTitle: '',
  };

  state = {};

  _onTextLayout = e => {
    if (this.state.initialTextWidth) {
      return;
    }
    this.setState({
      initialTextWidth: e.nativeEvent.layout.x + e.nativeEvent.layout.width,
    });
  };

  render() {
    const {
      buttonImage,
      onPress,
      pressColorAndroid,
      width,
      title,
      titleStyle,
      tintColor,
      truncatedTitle,
    } = this.props;

    const renderTruncated =
      this.state.initialTextWidth && width
        ? this.state.initialTextWidth > width
        : false;
    const buttonTitle = renderTruncated ? truncatedTitle : title;

    return (
      <TouchableOpacity
        accessibilityComponentType="button"
        testID="header-button"
        accessibilityTraits="button"
        delayPressIn={0}
        onPress={onPress}
        pressColor={pressColorAndroid}
        style={styles.container}
        borderless
      >
        <View style={styles.container}>
          <Icon
            style={styles.icon}
            name={buttonImage}
            size={20}
            color={(!!tintColor && { tintColor }).tintColor}
          />

          {Platform.OS === 'ios' &&
          typeof buttonTitle === 'string' && (
            <Text
              onLayout={this._onTextLayout}
              style={[
                styles.title,
                !!tintColor && { color: tintColor },
                titleStyle,
              ]}
              numberOfLines={1}
            >
              {buttonTitle}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 17,
    paddingRight: 10,
  },
  icon:
    Platform.OS === 'ios'
      ? {
        height: 20,
        width: 20,
        marginRight: 9,
        marginLeft: 22,
        marginVertical: 12
      }
      : {
        height: 24,
        width: 24,
        margin: 16
      },
  iconWithTitle:
    Platform.OS === 'ios'
      ? {
        marginRight: 6,
      }
      : {},
});

export default HeaderButton;