import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Homescreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
//import Camara from './screens/Camara';
import Temperatura from './screens/temperatura';
import Humedad from './screens/humedad';
import Luminosidad from './screens/luminosidad';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Homescreen}
          options={{ title: 'Inicio' }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: 'Propósito de la aplicación' }}
        />
           <Stack.Screen
            name="temperatura"
            component={Temperatura}
            options={{ title: 'Temperatura' }}
          />
          <Stack.Screen
            name="humedad"
            component={Humedad}
            options={{ title: 'Humedad' }}
          />
          <Stack.Screen
            name="luminosidad"
            component={Luminosidad}
            options={{ title: 'Luminosidad' }}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
