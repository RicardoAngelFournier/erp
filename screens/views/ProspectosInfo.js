import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import commonStyles from '../../estilos/estilo';

const ProspectosInfo = ({ navigation }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  const handleOptionSelection = (option) => {
    // Do something with the selected option
    console.log('Opcion Seleccionada:', option);
    closeDropdown();
  };

  const dropdownOptions = [
    { label: 'Desactivar', value: 'option1' },
    { label: 'Mandar a Autorizar', value: 'option2' },
  ];

  return (
    <View style={commonStyles.container}>
      <View style={styles.header}>
        <Icon name="users-line" style={{ ...commonStyles.icon, fontSize: 40 }} />
      </View>
      <View style={commonStyles.fullWidthCard}></View>
      {/* White Card */}
      <View style={styles.card}>
        <TouchableOpacity style={styles.leftButton} onPress={toggleDropdown}>
          <View style={styles.buttonContainer}>
            <Icon name="bars" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Opciones</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.rightButtonsContainer}>
          <TouchableOpacity style={styles.smallButton}>
            <Icon name="share-nodes" style={styles.buttonIcon2} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallButton}>
            <Icon name="file-pdf" style={styles.buttonIcon2} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallButton}>
            <Icon name="pen-to-square" style={styles.buttonIcon2} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Dropdown */}
      <Modal visible={showDropdown} transparent animationType="fade">
        <TouchableOpacity
          style={styles.modalBackground}
          onPress={closeDropdown}
        >
          <View style={styles.dropdown}>
            {dropdownOptions.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.dropdownOption}
                onPress={() => handleOptionSelection(option.value)}
              >
                <Text style={styles.dropdownOptionText}>{option.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>

      {/* Informacion del Prospecto */}
      <View style={styles.card2}>
        <View style={styles.prospectInfo}>
          <Text style={commonStyles.title}>Berel Pinturas</Text>
          <Text style={commonStyles.titulomorado}>Nombre:</Text>
          <Text style={commonStyles.titulomorado}>Rol:</Text>
          <Text style={commonStyles.titulomorado}>Telefono:</Text>
          <Text style={commonStyles.titulomorado}>Codigo:</Text>
          <Text style={commonStyles.titulomorado}>De:</Text>
          <Text style={commonStyles.titulomorado}>Hasta:</Text>
        </View>
        <View style={styles.prospectValues}>
          <Text style={commonStyles.info}>Ricardo Herrera</Text>
          <Text style={commonStyles.info}>Encargado</Text>
          <Text style={commonStyles.info}>618-107-95-78</Text>
          <Text style={commonStyles.info}>123FA7ERJ</Text>
          <Text style={commonStyles.info}>01/10/2023</Text>
          <Text style={commonStyles.info}>01/10/2023</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    margin: 8,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  card2: {
    backgroundColor: '#fff',
    borderRadius: 20,
    margin: 8,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftButton: {
    marginRight: 'auto',
  },
  rightButtonsContainer: {
    flexDirection: 'row',
  },
  smallButton: {
    marginLeft: 10,
    fontSize: 20,
  },
  prospectInfo: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  buttonIcon: {
    fontSize: 20,
    color: '#FCFDFF', // Set the color you prefer
  },
  buttonIcon2: {
    fontSize: 30, // Set the color you prefer
    paddingHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#4D69B4', // Set your desired button color
  },
  buttonText: {
    marginLeft: 5,
    color: 'white', // Set the text color
    fontWeight: 'bold',
  },
  prospectValues: {
    marginTop: 25,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdown: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  dropdownOption: {
    padding: 10,
  },
  dropdownOptionText: {
    fontSize: 16,
    color: '#333',
  },
});

export default ProspectosInfo;