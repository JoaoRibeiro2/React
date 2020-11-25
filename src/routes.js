import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Relogio from './Relogio';
import Tabelas from './Tabelas';

const Stack = createStackNavigator();

export default function Routes(){

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Tabelas"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen 
                    name="Relogio"
                    component={Relogio}
                />

                <Stack.Screen 
                    name="Tabelas"
                    component={Tabelas}
                />
            </Stack.Navigator>
        </NavigationContainer>

    )
}