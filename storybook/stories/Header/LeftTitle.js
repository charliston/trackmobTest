import React from 'react';
import { View } from 'react-native';
import { StackNavigator, HeaderBackButton } from 'react-navigation';

class EmptyScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} />
    );
  }
}

export default StackNavigator({
    Home: {
      screen: EmptyScreen,
      navigationOptions: {
        headerLeft: <HeaderBackButton onPress={() => {}} />,
        title: 'Awesome Title',
      }
    },
  },
  {
    initialRouteName: 'Home',
  }
);
