import React, { useState, useEffect } from "react";
import { View, Text } from 'react-native';
import axios from "axios";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AntDesign } from "@expo/vector-icons";
import Home from './../pages/home';
import { SwipeListView } from 'react-native-swipe-list-view';
import { NativeBaseProvider, Fab, Pressable, Flex, Icon, Box, Row, Spacer, FlatList, Avatar, HStack, VStack, Stack, Center, AspectRatio, ScrollView, Heading, Image, Input, Container } from 'native-base';


function HomeScreen({ navigation }: { navigation: any }) {
    let [dado, Dados] = useState([]);
    const data = [{
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        fullName: "Aafreen Khan",
        timeStamp: "12:47 PM",
        recentText: "Good Day!",
        avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }, {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        fullName: "Sujitha Mathur",
        timeStamp: "11:11 PM",
        recentText: "Cheer up, there!",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
    }, {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        fullName: "Anci Barroco",
        timeStamp: "6:22 PM",
        recentText: "Good Day!",
        avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
    }, {
        id: "68694a0f-3da1-431f-bd56-142371e29d72",
        fullName: "Aniket Kumar",
        timeStamp: "8:56 PM",
        recentText: "All the best",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
    }, {
        id: "28694a0f-3da1-471f-bd96-142456e29d72",
        fullName: "Kiara",
        timeStamp: "12:47 PM",
        recentText: "I will call today.",
        avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
    }];
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
                <VStack w="90%" space={5} py="2" alignSelf="center">
                    <Heading >Rest API</Heading>
                    <Input placeholder="Search" variant="filled" width="130%" borderRadius="10" py="1" px="2" InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />} />
                </VStack>
            </Container>



            <HStack>
                <ScrollView>
                    <FlatList showsHorizontalScrollIndicator={false} shadow="2" horizontal={true} data={dado} renderItem={({ item }) =>
                        <Box borderBottomWidth="1" _dark={{ borderColor: "muted.50" }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
                            <HStack space={[2, 3]} justifyContent="space-between">
                                <Avatar size="50px" source={{ uri: API + item.imagen }} />
                                <Spacer />
                            </HStack>
                        </Box>
                    } keyExtractor={item => item.id} />
                </ScrollView>
            </HStack>

            <ScrollView>

                {/* {dado.map((pessoa, key) => { return (<></>) })}> */}
                <VStack>
                    <FlatList showsHorizontalScrollIndicator={false} horizontal={false} data={dado} renderItem={({ item }) =>
                        <HStack space={3} justifyContent="center">
                            <Box alignItems="center" py="2">
                                <Box maxW="360" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                                    borderColor: "coolGray.600",
                                    backgroundColor: "gray.700"
                                }} _web={{
                                    shadow: 2,
                                    borderWidth: 0
                                }} _light={{
                                    backgroundColor: "gray.50"
                                }}>
                                    <Box>
                                        <AspectRatio w="100%" ratio={16 / 9}>
                                            <Image source={{ uri: API + item.imagen }} alt="image" />
                                        </AspectRatio>
                                        <Center bg="violet.500" _dark={{
                                            bg: "violet.400"
                                        }} _text={{
                                            color: "warmGray.50",
                                            fontWeight: "700",
                                            fontSize: "xs"
                                        }} position="absolute" bottom="0" px="3" py="1.5">
                                            {item.titulo}
                                        </Center>
                                    </Box>
                                    <Stack w="900" p="4" space={3}>
                                        <Stack space={2}>
                                            <Heading size="md" ml="-1">
                                                {item.titulo}
                                            </Heading>
                                            <Text fontSize="xs" _light={{
                                                color: "violet.500"
                                            }} _dark={{
                                                color: "violet.400"
                                            }} fontWeight="500" ml="-0.5" mt="-1">
                                                The Silicon Valley of India.
                                            </Text>
                                        </Stack>
                                        <Text fontWeight="400">
                                            {item.descricao}
                                        </Text>
                                        <HStack alignItems="center" space={4} justifyContent="space-between">
                                            <HStack alignItems="center">
                                                <Text color="coolGray.600" _dark={{
                                                    color: "warmGray.200"
                                                }} fontWeight="400">
                                                    6 mins ago
                                                </Text>
                                            </HStack>
                                        </HStack>
                                    </Stack>
                                </Box>
                            </Box>
                        </HStack>
                    } keyExtractor={item => item.id} />
                </VStack>
            </ScrollView >


            <Fab onPress={() => { navigation.navigate('Settings'); }} renderInPortal={false} shadow={2} right={8} size="sm" icon={<Icon color="white" as={AntDesign} name="plus" size="4" />} />
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