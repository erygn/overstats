import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, TouchableOpacity, StatusBar, LayoutAnimation } from 'react-native';
import * as firebase from 'firebase'

export default class LoginScreen extends React.Component {

  static navigationOptions = {
    headerShown: false
  }

  state = {
    email: '',
    password: '',
    errorMessage: null
  }

  handleLogin = () => {
    const identitiant = this.state.email;
    const mdp = this.state.password;

    firebase.auth().signInWithEmailAndPassword(identitiant, mdp).catch(error => this.setState({ errorMessage: error.message }));

  }

  render() {
    LayoutAnimation.easeInEaseOut();
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle='light-content' />
        <ScrollView>
          <View style={styles.viewTitle}>
            <Text style={{ fontSize: 30, color: '#FFF' }}>OverStats</Text>
            <Text style={{ color: '#FFF', fontSize: 12 }}>Stats Overwatch</Text>
          </View>

          <View style={styles.error}>
            {this.state.errorMessage && <Text style={styles.errorMsg}>{this.state.errorMessage}</Text>}
          </View>

          <View style={styles.form}>
            <View>
              <Text style={styles.formTitle}>Mail</Text>
              <TextInput style={styles.input} onChangeText={email => this.setState({ email })} value={this.state.email} autoCapitalize='none' />
            </View>
            <View style={{ marginTop: 32 }}>
              <Text style={styles.formTitle}>Mot de Passe</Text>
              <TextInput style={styles.input} onChangeText={password => this.setState({ password })} value={this.state.password} secureTextEntry autoCapitalize='none' />
            </View>
          </View>

          <TouchableOpacity style={styles.button} onPress={this.handleLogin} >
            <Text style={{ fontWeight: '500', color: '#FFF' }}>CONNEXION</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ alignSelf: 'center', marginTop: 32 }} onPress={() => this.props.navigation.navigate("Register")}>
            <Text style={{ color: '#2E3439', fontSize: 13 }}>
              Pas de compte ? <Text style={{ fontWeight: '500', color: '#FFF' }}>S'inscrire !</Text>
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={{ fontWeight: '500', color: '#FFF' }}>CONNEXION AVEC GOOGLE</Text>
          </TouchableOpacity>

        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171A1D'
  },
  viewTitle: {
    alignItems: 'center',
    marginTop: 40
  },
  errorMsg: {
    color: '#E9446A',
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'center'
  },
  error: {
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: "center"
  },
  form: {
    marginTop: 40,
    marginHorizontal: 39,
    marginBottom: 20
  },
  formTitle: {
    color: '#8A8F9E',
    fontSize: 12,
    textTransform: 'uppercase'
  },
  input: {
    borderBottomColor: '#8A8F9E',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: '#FFF'
  },
  button: {
    marginTop: 20,
    marginHorizontal: 50,
    backgroundColor: '#2E3439',
    borderRadius: 40,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
