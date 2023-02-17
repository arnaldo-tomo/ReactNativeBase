import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detalhes from "../../pages/Detalhes";
import Inicio from './../../pages/inicio';
import Home from '../../pages/home';
import HomeScreen from '../../pages/HomeScreen';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";


const Stack = createNativeStackNavigator();
function MainStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="Detalhes" component={Detalhes} />
                <Stack.Screen name="Inicio" component={Inicio} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


const Tab = createBottomTabNavigator();
function TabNavigator() {
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
                        'ios-search-outline' :
                        'ios-search-outline';
                } else if (route.name === 'book') {
                    iconName = focused ?
                        'ios-library-outline' :
                        'ios-library-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
            },

            tabBarActiveTintColor: 'red',
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