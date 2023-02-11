import React, { useState, useEffect } from "react";
import { View, Text } from 'react-native';
import axios from "axios";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AntDesign } from "@expo/vector-icons";
import Home from './../pages/home';
import { SwipeListView } from 'react-native-swipe-list-view';
import { NativeBaseProvider, Fab, Pressable, Flex, Icon, Box, HStack, Badge, Spacer, MaterialIcons, ScrollView, Heading, Divider, VStack, Input, Container } from 'native-base';


function HomeScreen({ navigation }: { navigation: any }) {
    let [dado, Dados] = useState([]);
    useEffect(() => {

        axios.get("http://reactjs-front.com/BackEnd-Laravel/public/api/todos")

            .then((resultadoAPI) => {
                Dados(resultadoAPI.data)
            })

            .catch(() => {
                console.log("API NAO ESTA A RETORNAR NADA PUTO!")
            })

    }, []);
    return (
        <NativeBaseProvider>
            <Container>
                <VStack w="90%" space={5} py="2" alignSelf="center">
                    <Heading >Rest API</Heading>
                    <Input placeholder="Search" variant="filled" width="130%" borderRadius="10" py="1" px="2" InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />} />
                </VStack>
            </Container>


            <ScrollView>
                {
                    dado.map((pessoa, key) => {
                        return (
                            <Box py="2" alignItems="center" key={key}>
                                <Pressable onPress={() => console.log("I'm Pressed")} rounded="8" overflow="hidden" borderWidth="1" borderColor="coolGray.300" maxW="96" shadow="3" bg="coolGray.100" p="5">
                                    <Box>
                                        <HStack py="2" alignItems="center">
                                            <Badge colorScheme="darkBlue" _text={{
                                                color: "white"
                                            }} variant="solid" rounded="4">
                                                {pessoa.id}
                                            </Badge>
                                            <Spacer />
                                            <Text fontSize={10} color="coolGray.800">
                                                {pessoa.created_at}
                                            </Text>
                                        </HStack>
                                        <Text color="coolGray.800" mt="3" py="2" fontWeight="medium" fontSize="xl">
                                            {pessoa.nome}
                                        </Text>
                                        <Text mt="2" py="2" fontSize="sm" color="coolGray.700">
                                            Unlock powerfull time-saving tools for creating email delivery and
                                            collecting marketing data
                                        </Text>
                                        <Flex>
                                            <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
                                                Read More
                                            </Text>
                                        </Flex>
                                    </Box>
                                </Pressable>
                            </Box>

                        )
                    })
                }
            </ScrollView>


            <Fab onPress={() => { navigation.navigate('Settings'); }} renderInPortal={false} shadow={2} right={8} size="sm" icon={<Icon color="white" as={AntDesign} name="plus" size="4" />} />
        </NativeBaseProvider>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();
export default function Route() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'ios-server-outline'
                                : 'ios-server-outline';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'ios-list' : 'ios-list-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Tab.Screen name="Settings" component={Home} options={{ headerShown: false }} />
            </Tab.Navigator>
        </NavigationContainer>

    );
}