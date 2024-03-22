import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const Homescreen = ({ navigation }) => {
    return (
        <ImageBackground
            source={require('../assets/imagensol.jpg')}
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
                    <Text style={styles.buttonText}>Propósito</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('temperatura')}
                >
                    <Ionicons name="cloudy-night-outline" size={24} color="white" />
                    <Text style={styles.buttonText}>Temperatura</Text>
                </TouchableOpacity>
                {/* Botón adicional 1 */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('humedad')}
                >
                    <Ionicons name="water-outline" size={24} color="white" />
                    <Text style={styles.buttonText}>Humedad</Text>
                </TouchableOpacity>
                {/* Botón adicional 2 */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('luminosidad')}
                >
                    <Ionicons name="flashlight-outline" size={24} color="white" />
                    <Text style={styles.buttonText}>Luminosidad</Text>
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
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 160, // Margen superior para el contenedor
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 20,
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -4, height: 6 },
        textShadowRadius: 10,
        backgroundColor: 'transparent', // Para asegurar que el fondo degradado se aplique correctamente


    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#007bff',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 8,
        marginBottom: 20,
        elevation: 4, // Agrega sombra para efecto de elevación
        borderWidth: 1, // Agrega un borde para resaltar el botón
        borderColor: '#0056b3', // Color del borde
    },
    buttonText: {
        color: '#fff', // Color del texto dentro del botón
        fontSize: 16, // Tamaño del texto
        fontWeight: 'bold', // Peso del texto (negrita)
    },



    buttonText: {
        color: 'white',
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default Homescreen;
