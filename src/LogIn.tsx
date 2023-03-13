import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useContext} from 'react';
import MaskInput from 'react-native-mask-input';
import {AuthContext} from './context/AuthContext';

export const LogIn = () => {
  const [phone, setPhone] = useState('');
  const {login} = useContext(AuthContext);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.headerText}>Войдите в учётную запись</Text>
      <MaskInput
        style={styles.input}
        value={phone}
        placeholder="Логин"
        keyboardType="numeric"
        onChangeText={(masked) => {
          setPhone(masked);
        }}
        mask={[
          '+',
          '7',
          ' ',
          '(',
          /\d/,
          /\d/,
          /\d/,
          ')',
          ' ',
          /\d/,
          /\d/,
          /\d/,
          '-',
          /\d/,
          /\d/,
          '-',
          /\d/,
          /\d/,
        ]}
      />

      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Пароль"></TextInput>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          login();
        }}>
        <Text style={styles.buttonText}>Войти</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    width: '100%',
    backgroundColor: '#112e80',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 25,
  },
  input: {
    backgroundColor: '#fff',
    width: '30%',
    borderRadius: 10,
    marginTop: 30,
    padding: 10,
  },
  button: {
    backgroundColor: '#456ede',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#afbbdb',
    width: '30%',
    padding: 10,
    marginTop: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});
