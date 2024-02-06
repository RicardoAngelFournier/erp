import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = ({ route }) => {
  const user = route.params?.user || {};

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Ionicons name="person-circle-outline" size={80} color="#4D69B4" style={styles.icon} />
        <View style={styles.contentContainer}>
          <Text style={styles.header}>{user.fullName}</Text>
          <Text style={styles.text}>{user.email}</Text>
          <Text style={styles.text}>{user.puesto}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#4D69B4',
    padding:10
  },
  card: {
    flexDirection: 'row', 
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    width: '85%',
    alignItems: 'center',
  },
  icon: {
    marginStart: -18,
    marginTop: -60,
    marginRight:5, 
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default ProfileScreen;
