import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, TouchableOpacity, StatusBar, LayoutAnimation } from 'react-native';
import * as firebase from 'firebase'

import Icons from 'react-native-vector-icons/Ionicons'

export default class RegisterScreen extends React.Component {

  static navigationOptions = {
    headerShown: false
  }

  state = {
    name: '',
    email: '',
    password: '',
    passwordTwo: '',
    errorMessage: null
  }

  handleSignUp = () => {
    const identitiant = this.state.email;
    const { password, passwordTwo } = this.state;

    if (password === passwordTwo && password != '') {
      firebase.auth().createUserWithEmailAndPassword(identitiant, password)
        .then(userCredentials => {
          return userCredentials.user.updateProfile({
            displayName: this.state.name
          })
        }).catch(error => this.setState({ errorMessage: error.message }))
    } else {
      this.setState({ errorMessage: 'Mot de passe non cohérent ou vide' })
    }
  }


  render() {
    LayoutAnimation.easeInEaseOut();
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <StatusBar barStyle='light-content' />

          <View style={styles.viewTitle}>
            <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
              <Icons name='ios-arrow-round-back' size={32} color="#454545" />
            </TouchableOpacity>
            <Text style={{ fontSize: 30, color: '#FFF' }}>OverStats</Text>
            <Text style={{ color: '#FFF', fontSize: 12 }}>Créer un compte</Text>
          </View>

          <View style={styles.error}>
            {this.state.errorMessage && <Text style={styles.errorMsg}>{this.state.errorMessage}</Text>}
          </View>

          <View style={styles.form}>
            <View style={{ marginTop: 32 }}>
              <Text style={styles.formTitle}>Pseudo</Text>
              <TextInput style={styles.input} onChangeText={name => this.setState({ name })} value={this.state.name} autoCapitalize='none' />
            </View>
            <View style={{ marginTop: 32 }}>
              <Text style={styles.formTitle}>Mail</Text>
              <TextInput style={styles.input} onChangeText={email => this.setState({ email })} value={this.state.email} autoCapitalize='none' />
            </View>
            <View style={{ marginTop: 32 }}>
              <Text style={styles.formTitle}>Mot de Passe</Text>
              <TextInput style={styles.input} onChangeText={password => this.setState({ password })} value={this.state.password} secureTextEntry autoCapitalize='none' />
            </View>
            <View style={{ marginTop: 32 }}>
              <Text style={styles.formTitle}>Confirmer mot de passe</Text>
              <TextInput style={styles.input} onChangeText={passwordTwo => this.setState({ passwordTwo })} value={this.state.passwordTwo} secureTextEntry autoCapitalize='none' />
            </View>
          </View>

          <TouchableOpacity style={styles.button} onPress={this.handleSignUp} >
            <Text style={{ fontWeight: '500', color: '#FFF', textTransform: 'uppercase' }}>Créer un compte</Text>
          </TouchableOpacity>

          <View style={{ alignSelf: 'center', marginTop: 32, marginHorizontal: 35 }}>
            <Text style={{ color: '#2E3439', fontSize: 13, textAlign: 'center' }}>
              En cliquant sur 'Créer un compte' vous vous inscrivez sur OverStats
            </Text>
          </View>

          <View style={{ borderBottomColor: '#2E3439', borderBottomWidth: 1, marginTop: 26, marginHorizontal: 90 }} />

          <TouchableOpacity style={{ alignSelf: 'center', marginTop: 32, marginBottom: 32 }} onPress={() => this.props.navigation.goBack()}>
            <Text style={{ color: '#2E3439', fontSize: 13 }}>
              Déjà un compte ? <Text style={{ fontWeight: '500', color: '#FFF' }}>Se connecter</Text>
            </Text>
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
    marginHorizontal: 39
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
    marginTop: 50,
    marginHorizontal: 50,
    backgroundColor: '#2E3439',
    borderRadius: 40,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center'
  },
  back: {
    position: 'absolute',
    top: 15,
    left: 32,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(21, 22, 48, 0.1)',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
