import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Importa los íconos de MaterialCommunityIcons desde Expo

const Temperatura = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/tempe.jpg')} // Ruta de tu imagen de fondo
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Temperatura Actual</Text>
        <View style={styles.weatherContainer}>
          <MaterialCommunityIcons name="weather-sunny" size={120} color="#FFD700" />
          <Text style={styles.temperature}>25°C</Text>
          <Text style={styles.description}>Cielo Despejado</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Ajustar la imagen al tamaño del contenedor
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Fondo semitransparente
    width: '100%',
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

export default Temperatura;
