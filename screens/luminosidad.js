import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Importa los íconos de MaterialCommunityIcons desde Expo




const Luminosidad = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Luminosidad Actual</Text>
            <View style={styles.weatherContainer}>
                <MaterialCommunityIcons name="flash-outline" size={120} color="blue" />
                <Text style={styles.temperature}>750</Text>
                <Text style={styles.description}>Buena Luz</Text>
            </View>
            <View style={styles.buttonContainer}>

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

export default Luminosidad;
