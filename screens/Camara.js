import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Importa los íconos de MaterialCommunityIcons desde Expo

const Camara = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pronóstico del Clima</Text>
      <View style={styles.weatherContainer}>
        <MaterialCommunityIcons name="weather-sunny" size={120} color="#FFD700" />
        <Text style={styles.temperature}>25°C</Text>
        <Text style={styles.description}>Cielo Despejado</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Ir a Inicio"
          onPress={() => navigation.navigate('Home')}
          color="#841584" // Cambia el color del botón según tu preferencia
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db', // Color de fondo azul claro
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#fff', // Color de texto blanco
  },
  weatherContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  temperature: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#fff', // Color de texto blanco
    marginTop: 20,
  },
  description: {
    fontSize: 24,
    color: '#fff', // Color de texto blanco
    textTransform: 'capitalize', // Capitaliza la descripción del clima
  },
  buttonContainer: {
    width: '70%', // Ancho del contenedor de botón
  },
});

export default Camara;
