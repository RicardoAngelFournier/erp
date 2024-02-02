import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6'; 
import { useNavigation } from '@react-navigation/native';


export default function ProfileScreen() {
  const navigation = useNavigation();
  const row1 = [
    { icon: 'person-running', screen: 'Screen1' },
    { icon: 'users-line', screen: 'Screen2' },
    { icon: 'file-signature', screen: 'Screen3' },
    { icon: 'users', screen: 'Screen4' },
  ];

  const row2 = [
    { icon: 'file', screen: 'Screen5' },
    { icon: 'flag-checkered', screen: 'Screen6' },
    { icon: 'calendar-days', screen: 'Screen7' },
    { icon: 'photo-film', screen: 'Screen8' },
  ];

  const topRow = [
    {
      icon: 'user',
      name: 'John Doe',
      role: 'Developer',
      email: 'john.doe@example.com',
      screen: 'ProfileScreen',
      size: { width: 300, height: 120 },
    },
    { name: 'John Doe', role: 'Developer', size: { width: 300, height: 70 } },
    { name: 'John Doe', role: 'Developer', size: { width: 300, height: 70 } },
  ];

  const fullWidthCard = {
    backgroundColor: '#E8EBF3',
    height: '100%',
    position: 'absolute',
    left: 0,
    right: 0,
    borderRadius: 25,
    top: 35,
    zIndex: -1,
  };

  const titulo = [
    { name: 'Visitas' },
    { name: 'Prospectos' },
    { name: 'Contratos' },
    { name: 'Clientes' },
    { name: 'Contratos Disponibles' },
    { name: 'Continuidad' },
    { name: 'Agenda' },
    { name: 'Produccion' }
  ];
  
  const iconColor = '#7371FC';
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4D69B4' }}>
      {/* Top row */}
      <View style={{ alignItems: 'center', marginTop: -210 }}>
        {topRow.map((card, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('Prospectos')}
            style={{
              width: card.size.width,
              height: card.size.height,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#FFFFFF',
              borderRadius: 15,
              marginVertical: 10,
            }}
          >
            {index === 0 && (
              <View style={{ marginBottom: 10 }}>
                <Icon name={card.icon} size={30} color={iconColor}/>
              </View>
            )}
            <Text style={{ textAlign: 'center' }} numberOfLines={1}>{card.role}</Text>
            <Text style={{ textAlign: 'center' }} numberOfLines={1}>{card.email}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Full-width card */}
      <View style={fullWidthCard}></View>

      {/* Existing rows */}
      <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
        {row1.map((card, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(card.screen)}
            style={{
              width: 80,
              height: 80,
              margin: 10,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#FFFFFF',
              borderRadius: 10,
            }}
          >
            <Icon name={card.icon} size={40} color={iconColor} />
            <Text style={{ marginTop: 5, textAlign: 'center', color: '#2E3548', fontSize: 10}}>{titulo[index].name}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
        {row2.map((card, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(card.screen)}
            style={{
              width: 80,
              height: 80,
              margin: 10,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#FFFFFF',
              borderRadius: 10,
            }}
          >
            <Icon name={card.icon} size={40} color={iconColor} />
            <Text style={{  textAlign: 'center', color: '#2E3548', fontSize: 10 }}>{titulo[index + row1.length].name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={{ color: '#2E3548', fontSize: 14 }}>Hoy</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});