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
          <Text style={styles.title}>Weather App</Text>
          <Text style={styles.subtitle}>La función principal de la aplicación es proporcionar pronósticos precisos del tiempo para ubicaciones específicas. Esto incluye información como temperatura actual y futura, condiciones climáticas (soleado, nublado, lluvioso, nevado, etc.), velocidad y dirección del viento, humedad, presión atmosférica y probabilidad de precipitaciones.</Text>
          <Button
            title="Mira el clima"
            onPress={() => navigation.navigate('Camara')}
            color="#fff"
          />
          <Button
            title="Regresar al inicio"
            onPress={() => navigation.navigate('HomeScreen')}
            color="#fff"
          />
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
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
  },
});

export default HomeScreen;
