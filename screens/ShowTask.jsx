import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import { AntDesign } from "@expo/vector-icons";
import { View, Text, RefreshControl } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NativeBaseProvider, HStack, Box, ScrollView, VStack, FlatList, Button, Collapse, Alert, Spinner, Heading } from 'native-base';

export default function ShowTask({ navigation }) {

    const [show, setShow] = React.useState(false);
    const [errorMessage, setErrorMessage] = useState([]);
    const [data, setData] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    function fetchData() {

        axios.get('http://127.0.0.1:8000/api/todos')
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                console.log(error.response.data.message)
            })
    }


    function apagar(id) {

        axios.post(`http://127.0.0.1:8000/api/delete/${id}`)
            .then((response) => {
                fetchData();
                setShow(true);
                console.log('Eliminado', id);
            })
            .catch((error) => {
                console.log(error.response.data.message)
            })
    }

    if (data == 0) {
        return (
            <NativeBaseProvider>
                <HStack space={4} paddingTop="400" justifyContent="center" alignItems="center">
                    <Spinner color="warning.500" size="lg" />
                    <Heading color="warning.500" fontSize="md">
                        Procurando dados...
                    </Heading>
                </HStack>
            </NativeBaseProvider>
        )

    }

    return (

        <NativeBaseProvider>
            {/* Alerta */}
            <Collapse isOpen={show}>
                <Alert maxW="400" status="success">
                    <VStack space={1} flexShrink={1} w="100%">
                        <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
                            <HStack flexShrink={1} space={2} alignItems="center">
                                <Alert.Icon />
                                <Text fontSize="md" fontWeight="medium" _dark={{
                                    color: "primary.900"
                                }}>
                                    Task  Eliminado!
                                </Text>
                            </HStack>
                        </HStack>
                        <Box pl="6" _dark={{
                            _text: {
                                color: "coolGray.600"
                            }
                        }}>
                            {errorMessage}
                        </Box>
                    </VStack>
                </Alert>
            </Collapse>
            {/* Fim da alerta */}
            <ScrollView>
                <Box>
                    <FlatList data={data} renderItem={({ item }) =>

                        <Box borderBottomWidth="1" _dark={{ borderColor: "muted.50" }}
                            borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
                            <HStack space={[4, 4]} marginX="4" justifyContent="space-between">
                                <VStack>
                                    <Text _dark={{
                                        color: "warmGray.50"
                                    }} color="coolGray.800" bold>
                                        {item.nome}
                                    </Text>
                                    <Text color="coolGray.600" _dark={{
                                        color: "warmGray.200"
                                    }}>
                                        {item.email}
                                    </Text>
                                </VStack>
                                <HStack space={2} mt="4" justifyContent="space-between" >
                                    <TouchableOpacity onPress={() => navigation.navigate('Criar', item)} >
                                        <Button bgColor={'black'} height={5} >Edit</Button>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => apagar(item.id)}>
                                        <Button bgColor={'red.900'} height={5}>Delete</Button>
                                    </TouchableOpacity>
                                </HStack>
                            </HStack>
                        </Box>} keyExtractor={item => item.id} />
                </Box>
            </ScrollView >
        </NativeBaseProvider >


    )
}
export { fetchData };