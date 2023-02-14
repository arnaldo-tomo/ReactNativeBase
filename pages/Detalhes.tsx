import React, { useEffect } from 'react';
import {
    NativeBaseProvider, Text, Icon, Button, Box, Spacer, FlatList, Avatar, HStack,
    VStack, Stack, AspectRatio, Actionsheet, StyleSheet, View, Center, Heading, Image, Input, Container, useDisclose
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';

function Example() {
    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();
    return <Center>
        <Button onPress={onOpen}>Actionsheet</Button>
        <Actionsheet isOpen={isOpen} onClose={onClose}>
            <Actionsheet.Content>
                <Box w="100%" h={60} px={4} justifyContent="center">
                    <Text fontSize="16" color="gray.500" _dark={{
                        color: "gray.300"
                    }}>
                        Albums
                    </Text>
                </Box>
                <Actionsheet.Item>Delete</Actionsheet.Item>
                <Actionsheet.Item isDisabled>Share</Actionsheet.Item>
                <Actionsheet.Item>Play</Actionsheet.Item>
                <Actionsheet.Item>Favourite</Actionsheet.Item>
                <Actionsheet.Item>Cancel</Actionsheet.Item>
            </Actionsheet.Content>
        </Actionsheet>
    </Center>;
}
export default function Detalhes({ navigation, route }) {

    const API = "http://127.0.0.1:8000/";
    const { id, nome, titulo, imagen, descricao, dataInicio } = route.params;
    return (
        <NativeBaseProvider>
            <Box alignItems="center">
                <Box rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                    borderColor: "coolGray.600",
                    backgroundColor: "gray.700"
                }} _web={{
                    shadow: 2,
                    borderWidth: 0
                }} _light={{
                    backgroundColor: "gray.50"
                }}>
                    <Box>
                        <AspectRatio w="100%" ratio={16 / 16}>
                            <Image source={{ uri: API + imagen }} alt="image" />
                        </AspectRatio>
                        <Actionsheet.Content>
                            <Actionsheet.Item>Delete</Actionsheet.Item>
                            <Stack p="4" space={3}>
                                <Stack space={2}>
                                    <Heading size="md" ml="-1">
                                        The Garden City
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
                                    Bengaluru (also called Bangalore) is the center of India's high-tech
                                    industry. The city is also known for its parks and nightlife.
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
                        </Actionsheet.Content>
                        <Center bg="violet.500" _dark={{
                            bg: "violet.400"
                        }} _text={{
                            color: "warmGray.50",
                            fontWeight: "700",
                            fontSize: "xs"
                        }} position="absolute" bottom="0" px="3" py="1.5">
                            PHOTOS
                        </Center>

                    </Box>


                </Box>
            </Box>


        </NativeBaseProvider >

    )
}; 