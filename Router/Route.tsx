import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Inicio from '../pages/inicio';
import Sobre from '../pages/Sobre';
import HomeScreen from '../pages/HomeScreen';
import Home from '../pages/home';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MinhasRotas() {
    return (
        <NavigationContainer>
            <Stack.Navigator  >
                <Stack.Screen name="Inicio" component={TabsNavigation} options={{ headerShown: false }} />
                <Stack.Screen name="Sobre" component={Sobre} />
            </Stack.Navigator>
        </NavigationContainer >
    );
}


function TabsNavigation() {
    const Tab = createBottomTabNavigator();
    return (

        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Home') {
                    iconName = focused
                        ? 'ios-server-outline'
                        : 'ios-server-outline';
                } else if (route.name === 'Settings') {
                    iconName = focused ?
                        'ios-list-outline' :
                        'ios-list-outline';
                } else if (route.name === 'book') {
                    iconName = focused ?
                        'ios-list'
                        : 'ios-library-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
            },

            tabBarActiveTintColor: '#cd077d',
            tabBarInactiveTintColor: 'gray',
        })}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="book" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Settings" component={Home} options={{ headerShown: false }} />
        </Tab.Navigator>

    );
}

export { MinhasRotas };