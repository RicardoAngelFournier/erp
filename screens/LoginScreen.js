import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
const LoginScreen = () => {
  const navigation = useNavigation();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleLogin = async () => {
  try {
    const response = await axios.post('http://192.168.151.244:8000/api/v1/login', {
      email: email,
      password: password,
    });

    if (response.data.success) {
      const accessToken = response.data.accessToken;

      // Guardar el token en AsyncStorage
      await AsyncStorage.setItem('token', accessToken);

      console.log('Token de Acceso guardado en AsyncStorage:', accessToken);

      // const responseDash = await axios.get('http://192.168.151.244:8000/api/v1/dashboard', {
      //     headers: {
      //         'Accept': 'application/json',
      //         'Authorization': 'Bearer '+accessToken
      //     }
      // });
      // console.log(responseDash.data);

    
      navigation.navigate('Profile');
      // Realizar la navegación o acciones adicionales después de iniciar sesión
    } 
    else {
      console.error('La autenticación falló');
    }
  }  catch (error) {
      console.error('Error de solicitud:', error.message);
      console.error('Error detallado:', error);
      console.error('Respuesta completa del error:', error.response);
  }
};

return (
  <View style={styles.container}>
    <Text style={styles.title}>Login</Text>
    <TextInput
      style={styles.input}
      placeholder="Correo electrónico"
      keyboardType="email-address"
      onChangeText={(text) => setEmail(text)}
    />
    <TextInput
      style={styles.input}
      placeholder="Contraseña"
      secureTextEntry={true}
      onChangeText={(text) => setPassword(text)}
    />
    <TouchableOpacity style={styles.button} onPress={handleLogin}>
      <Text style={styles.buttonText}>Iniciar Sesión</Text>
    </TouchableOpacity>
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 20,
},
title: {
  fontSize: 24,
  marginBottom: 20,
},
input: {
  width: '100%',
  height: 40,
  borderColor: 'gray',
  borderWidth: 1,
  borderRadius: 5,
  marginBottom: 10,
  paddingHorizontal: 10,
},
button: {
  backgroundColor: 'blue',
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 5,
},
buttonText: {
  color: 'white',
  fontSize: 16,
},
});

export default LoginScreen;