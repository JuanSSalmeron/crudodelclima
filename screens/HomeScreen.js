import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Homescreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/clima.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Contenido de la pantalla */}

      <View style={styles.container}>
        <Text style={styles.title}>¡Aplicación Meteorológica!</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Details')}
        >
          <Ionicons name="information-circle" size={24} color="white" />
          <Text style={styles.buttonText}>Información</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Camara')}
        >
          <Ionicons name="cloudy-night-outline" size={24} color="white" />
          <Text style={styles.buttonText}>Clima</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Homescreen;
