import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';   // Iconos de FONTAWESOME 6 para nuevo iconos ir a: https://oblador.github.io/react-native-vector-icons/
import commonStyles from './estilos/estilo'; // Hoja de estilos por defecto

const ProspectosScreen = ({ navigation }) => {
  return (
    <View style={commonStyles.container}>
      <View style={commonStyles.header}>
      <Icon name="users-line" style={{ ...commonStyles.icon, fontSize: 40 }} />
      </View>
      <View style={commonStyles.fullWidthCard}></View>
    </View>
  );
};

export default ProspectosScreen;