import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import ShowTask from '../screens/ShowTask';
import CreatTask from '../screens/CreatTask';
import Home from '../pages/home';
export default function TabsNavigation() {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>

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
        </NavigationContainer>

    );
}
