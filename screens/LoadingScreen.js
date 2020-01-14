import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, LayoutAnimation } from 'react-native';
import * as firebase from 'firebase'

export default class LoadingScreen extends React.Component {

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'App' : 'Auth')
    })
  }

  render() {
    LayoutAnimation.easeInEaseOut();
    return (
        <SafeAreaView style={styles.container}>
          <Text style={{color: '#FFF', fontSize: 27, fontWeight: '500'}}>OverStats</Text>
          <Text style={{color: '#FFF', fontSize: 12, fontWeight: '100'}}>By Genesis</Text>
        </SafeAreaView>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171A1D',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
