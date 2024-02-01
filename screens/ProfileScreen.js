// ProfileScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, AsyncStorage } from 'react-native';

const ProfileScreen = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Recuperar el token de acceso de AsyncStorage
        const accessToken = await AsyncStorage.getItem('accessToken');
         const response = await axios.get('tu-url-de-perfil', {
           headers: { Authorization: `Bearer ${accessToken}` },
         });

        // Simulando una respuesta del servidor (reemplaza esto con tu lógica real)
        const fakeResponse = { username: 'UsuarioEjemplo' };
        setUserData(fakeResponse);
      } catch (error) {
        console.error('Error al recuperar el token de acceso', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <View>
      <Text>{userData ? `Bienvenido, ${userData.username}!` : 'Cargando perfil...'}</Text>
      {/* Renderizar otros detalles del perfil aquí */}
    </View>
  );
};

export default ProfileScreen;
