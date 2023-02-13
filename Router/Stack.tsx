import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detalhes from '../pages/Detalhes';
import Sobre from '../pages/Sobre';
import HomeScreen from "../pages/HomeScreen";
import Home from "../pages/home";
import Inicio from "../pages/inicio";
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createNativeStackNavigator();

export default function MyStack() {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Inicio" component={Inicio} />
                <Stack.Screen name="sobre" component={Sobre} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


function TabsNavigation() {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
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

                tabBarActiveTintColor: '#cd077d',
                tabBarInactiveTintColor: 'gray',
            })}
            >
                <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Tab.Screen name="book" component={Home} options={{ headerShown: false }} />
                <Tab.Screen name="Settings" component={Home} options={{ headerShown: false }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}