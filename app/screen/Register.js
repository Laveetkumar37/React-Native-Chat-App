import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native';
import colors from '../config/colors';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';

const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onHandleSignup = () => {
    if (email !== '' && password !== '') {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => console.log('Signup success'))
        .catch((err) => console.log(`Login err: ${err}`));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Enter the greatest era of micro chatting
      </Text>
      <Text style={styles.subheader}>
        Create an account to have your personalized chat experience.
      </Text>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        autocomplete="none"
        keyboardType="email-address"
        textContentType="emailAddress"
        autoFocus={true}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        autocomplete="none"
        secureTextEntry={true}
        textContentType="password"
        autoCorrect={false}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Text style={styles.registerButton} onPress={onHandleSignup}>
        Create Account
      </Text>
      <Text
        style={styles.loginButton}
        onPress={() => navigation.navigate('Login')}
      >
        Already have an account? Login
      </Text>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingTop: 50,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    fontSize: 24,
    letterSpacing: -1.0,
    fontWeight: 700,
    marginBottom: 12,
    color: 'white',
    width: '90%'
  },
  subheader: {
    fontSize: 14,
    letterSpacing: -0.5,
    fontWeight: 400,
    marginBottom: 12,
    color: 'white',
    width: '90%'
  },
  input: {
    backgroundColor: colors.bg,
    borderColor: colors.border,
    borderWidth: 1,
    color: 'white',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    width: '90%'
  },
  label: {
    textAlign: 'left',
    width: '90%',
    marginVertical: 14,
    fontSize: 14,
    letterSpacing: -0.5,
    color: 'white'
  },
  registerButton: {
    width: '100%',
    marginTop: 14,
    backgroundColor: colors.brand,
    color: '#ffffff',
    width: '90%',
    textAlign: 'center',
    paddingVertical: 12,
    borderRadius: 7
  },
  loginButton: {
    marginTop: 18,
    paddingVertical: 12,
    color: 'white'
    // textDecorationLine: 'underline'
  }
});
