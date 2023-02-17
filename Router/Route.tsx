import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import ShowTask from '../screens/ShowTask';
import Home from '../pages/home';
import Actualizar from '../screens/Actualizar';

const Stack = createNativeStackNavigator();
function Primeiro() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Tabs" component={TabsNavigation} options={{ headerShown: false }} />
                <Stack.Screen name="Actualizar" component={Actualizar} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const Tab = createBottomTabNavigator();
function TabsNavigation() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Show') {
                    iconName = focused
                        ? 'ios-home-outline'
                        : 'ios-home-outline';
                } else if (route.name === 'CreatTask') {
                    iconName = focused ?
                        'ios-list-outline' :
                        'ios-list-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
            },

            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'black',
        })}
        >
            <Tab.Screen name="Show" component={ShowTask} />
            <Tab.Screen name="CreatTask" component={Home} />
        </Tab.Navigator>

    );
}


export { Primeiro };