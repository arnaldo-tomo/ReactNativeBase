import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import axios from "axios";
// import Ionicons from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';
import {
    NativeBaseProvider, Pressable, Icon, Button, Box, Spacer, FlatList, Avatar, HStack,
    VStack, Stack, AspectRatio, Badge, ScrollView, Actionsheet, Center, Heading, Image, Input, Container, useDisclose, Flex
} from 'native-base';


export default function HomeScreen({ navigation, route }) {
    const { isOpen, onOpen, onClose } = useDisclose();
    const [dado, Dados] = useState([]);
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
            <VStack w="100%" space={5} maxW='full'>

                <Box ml={2} mr={2} >

                    <Stack direction="row" mb="2.5" mt="1.5" space={3}>

                        <Heading color="primary.900" fontSize={18} fontFamily='Roboto'>HomeEventos</Heading>

                        <Flex mr={3} mb="2.5" mt="1.5" style={{ position: 'absolute', top: -20, right: -4 }}>
                            <Box ml={5}>
                                <Icon onPress={onOpen} as={Ionicons} name="filter-sharp" size={7} mt={3} />
                            </Box>
                        </Flex>

                    </Stack>
                </Box>

            </VStack>
            <Container>
                <VStack w="100%" space={5} maxW='full'>
                    <Input placeholder="Search" variant="filled" width="130%" borderRadius="10" py="1" px="2" InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />} />

                </VStack>
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
                    <TouchableOpacity onPress={() => { navigation.navigate('Detalhes', item); }}>
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

