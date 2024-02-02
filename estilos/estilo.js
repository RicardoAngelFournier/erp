import { StyleSheet } from 'react-native';


const commonStyles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    backgroundColor: '#4D69B4',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15
  },
  icon: {
    color: '#7371FC',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    margin: 15,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins_600SemiBold',
    color: '#2E3548',
  },
  info: {
    fontSize: 14,
    color: '#2E3548',
    fontFamily: 'Poppins_400Regular'
  },
  titulomorado: {
    fontSize: 14,
    color: '#7371FC',
    fontFamily: 'Poppins_400Regular',
    fontWeight: '500'
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  filterIcon: {
    marginRight: 5,
    color: '#2E3548',
  },
  filterText: {
    color: '#2E3548',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#BFBFBF',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
      backgroundColor: '#FCFDFF',
  },
  fullWidthCard: {
    backgroundColor: '#E8EBF3',
    height: '130%',
    position: 'absolute',
    left: 0,
    right: 0,
    borderRadius: 25,
    zIndex: -1,
  },
});

export default commonStyles;