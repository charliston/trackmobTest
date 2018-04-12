import React from 'react';
import { Text, StyleSheet, ActivityIndicator, View } from 'react-native';

export default function Loading(props) {
  if (props.isLoading) {
    if (props.timedOut) {
      return (
        <View>
          <Text>Loader timed out!</Text>
        </View>
      );
    } else {
      return (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#037aff" />
        </View>
      );
    }
  } else if (props.error) {
    return (
      <View>
        <Text>Error! Component failed to load.</Text>
      </View>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});