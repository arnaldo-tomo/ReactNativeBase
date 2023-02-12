import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import axios from "axios";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './../pages/home';
import {
    NativeBaseProvider, Pressable, Icon, Button, Box, Spacer, FlatList, Avatar, HStack,
    VStack, Stack, AspectRatio, Badge, ScrollView, Heading, Image, Input, Container,
} from 'native-base';


function HomeScreen({ navigation }: { navigation: any }) {
    let [dado, Dados] = useState([]);

    const API = "http://127.0.0.1:8000/";
    useEffect(() => {

        axios.get("http://127.0.0.1:8000/api/eventos")
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
                <HStack w="90%" space={5} py="2" alignSelf="center" flexDir="row" justifyContent="space-between" >
                    <Heading >HomeEventos</Heading>
                    <Pressable pl="155">
                        <Avatar size="10" source={{
                            uri: "https://avatars.githubusercontent.com/u/73796385?v=4"
                        }} ></Avatar>
                    </Pressable>
                </HStack>

                <HStack w="90%" space={5} alignSelf="center" justifyContent="space-between"  >
                    <Input placeholder="Search" variant="filled" width="130%" borderRadius="10" py="1" px="2" InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />} />
                </HStack>
            </Container>



            <HStack>
                <ScrollView>
                    <FlatList showsHorizontalScrollIndicator={false} shadow="2" pl="4" horizontal={true} data={dado} renderItem={({ item }) =>
                        <Box borderBottomWidth="1" _dark={{ borderColor: "muted.50" }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
                            <HStack space={[2, 3]} justifyContent="space-between">
                                <Avatar size="50px" source={{ uri: API + item.imagen }} />
                                <Spacer />
                            </HStack>
                        </Box>
                    } keyExtractor={item => item.id} />
                </ScrollView>
            </HStack>

            <Heading pl={4}>Novidades</Heading>

            <HStack space={3}>
                <ScrollView>
                    <FlatList showsHorizontalScrollIndicator={false} horizontal={true} data={dado} renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => { console.log('POST', item.id) }}>
                            <HStack space={3} ml="3" py={3} >
                                <Box flexDir="row" borderColor="coolGray.200" h="150" overflow="hidden" py="2" maxW="300" bg="gray.50" rounded="md" shadow="2">
                                    <Image mt="1" ml="2" shadow="9"
                                        borderRadius={10} borderColor="#22D3EE"
                                        source={{ uri: API + item.imagen }}
                                        alt="Alternate Text" size="xl" />
                                    <Stack p="4" space={1}>
                                        <Stack space={2}>
                                            <Heading size="md" ml="-1">
                                                {item.titulo}
                                            </Heading>

                                            <Text mt="2" fontSize="sm" color="coolGray.700">
                                                {item.descricao}
                                            </Text>
                                        </Stack>

                                        <HStack justifyContent="space-between">
                                            <HStack alignItems="center">
                                                <Text color="coolGray.600" _dark={{
                                                    color: "warmGray.200"
                                                }} fontWeight="400">
                                                    {item.dataInicio}
                                                </Text>
                                            </HStack>
                                        </HStack>
                                        <Stack base="column" md="row" space="4" flexDir="row">
                                            <Button space="4" size="sm" bg="danger.800" leftIcon={<Icon as={Ionicons} name="heart-outline" size="sm" />}></Button>
                                            <Button size="sm" bg="danger.800" leftIcon={<Icon as={Ionicons} name="heart-outline" size="sm" />}></Button>
                                        </Stack>

                                    </Stack>
                                </Box>
                            </HStack>
                        </TouchableOpacity>

                    } keyExtractor={item => item.id} />
                </ScrollView >
            </HStack >

            <Heading ml="4" py={2}>Eventos Recentes</Heading>
            <FlatList numColumns={2} showsHorizontalScrollIndicator={false} horizontal={false} data={dado} renderItem={({ item }) =>

                <VStack space="2"  >
                    <TouchableOpacity onPress={() => { console.log("detalhes clicado", item.id) }}>

                        <Box ml="2.5" bg="gray.50" mb="2.5" _light={{ bg: "coolGray.50" }}
                            _dark={{ bg: "gray.700" }} size="189" borderColor="coolGray.200" shadow={2} rounded="md" _text={{ color: "black" }} safeArea>
                            <AspectRatio h="100%" w="100%" >
                                <Image source={{ uri: API + item.imagen }} alt="image base" />
                            </AspectRatio>
                            <Badge shadow={4} h="12" _text={{ color: "white" }} variant="solid" >
                                {item.titulo}
                                {item.dataInicio}

                            </Badge>
                        </Box>
                    </TouchableOpacity>

                </VStack>
            } keyExtractor={item => item.id} />


        </NativeBaseProvider >
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
                        } else if (route.name === 'book') {
                            iconName = focused ? 'ios-list' : 'ios-library-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
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