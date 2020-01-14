import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, LayoutAnimation } from 'react-native';
import * as firebase from 'firebase'

export default class HomeScreen extends React.Component {

  signOut = () => {
    firebase.auth().signOut()
  }

  render() {
    LayoutAnimation.easeInEaseOut();
    return (
        <SafeAreaView style={styles.container}>
          <Text>Home</Text>
          <TouchableOpacity style={{marginTop: 32}} onPress={this.signOut}>
            <Text>Déconnexion</Text>
          </TouchableOpacity>
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
