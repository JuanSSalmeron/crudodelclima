import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/clima.jpg')}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Propósito</Text>
          <Text style={styles.subtitle}>
            La función principal de la aplicación es proporcionar pronósticos precisos del tiempo para ubicaciones específicas. Esto incluye información como temperatura actual y futura, condiciones climáticas (soleado, nublado, lluvioso, nevado, etc.), velocidad y dirección del viento, humedad, presión atmosférica y probabilidad de precipitaciones.
          </Text>
          <Text style={styles.subtitle}>
            Nuestro equipo de trabajo está comprometido en brindarte la mejor experiencia y precisión en la información meteorológica. Conoce al equipo:
          </Text>
          <Text style={styles.teamMember}>- Arias Estrella Jomar Alejandro</Text>
          <Text style={styles.teamMember}>- Salmerón Rivera Juan de Dios</Text>
          <Text style={styles.teamMember}>- Tuz Carrillo Daniel Alejandro</Text>
          <Text style={styles.teamMember}>SM54</Text>

          {/* Agrega más miembros del equipo según sea necesario */}
          <View style={styles.buttonContainer}>
            
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36, // Aumenta el tamaño del título
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20, // Aumenta el espacio después del título
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
    lineHeight: 24, // Aumenta la altura de línea para una mejor legibilidad
  },
  teamMember: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 30, // Aumenta el espacio antes del botón
    width: '70%', // Reducir el ancho del contenedor del botón para centrarlo más
  },
});

export default HomeScreen;
