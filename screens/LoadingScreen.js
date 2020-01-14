import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, LayoutAnimation } from 'react-native';

export default class LoadingScreen extends React.Component {

  render() {
    LayoutAnimation.easeInEaseOut();
    return (
        <SafeAreaView style={styles.container}>
          <Text>Loading</Text>
        </SafeAreaView>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
