import React from "react";
import { Button, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detalhes from "../../pages/Detalhes";
import Inicio from './../../pages/inicio';
import Home from '../../pages/home';
import HomeScreen from '../../pages/HomeScreen';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";


function MainStack() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="detalhes" component={Detalhes} />
                <Stack.Screen name="Inicio" component={Inicio} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


function TabNavigator() {
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
                    iconName = focused ? 'ios-list' : 'ios-list-outline';
                } else if (route.name === 'book') {
                    iconName = focused ? 'ios-list' : 'ios-library-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
            },

            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray',
        })}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="book" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Settings" component={Home} options={{ headerShown: false }} />
        </Tab.Navigator>

    );
}

export { MainStack };