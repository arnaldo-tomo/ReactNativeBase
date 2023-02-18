import axios from 'axios';
import { React } from 'react';
import { useEffect, useState } from 'react';
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NativeBaseProvider, HStack, Box, Text, ScrollView, VStack, FlatList, Button } from 'native-base';

export default function ShowTask({ navigation, route }) {
    const [show, setShow] = React.useState(false);
    const [errorMessage, setErrorMessage] = useState([]);
    const [task, taskse] = useState([]);

    useEffect(() => {

        axios.get("http://127.0.0.1:8000/api/todos")
            .then((response) => {
                taskse(response.data);
                console.log(response);

            })
    }, []);


    function apagar(id) {
        axios.post(`http://127.0.0.1:8000/api/delete/${id}`)
            .then((response) => {
                navigation.navigate('Show');
                console.log('esse gajo foi elimi multiTanes nado  digitalhost ', response);
            })
    }
    return (

        <NativeBaseProvider>
            <ScrollView>
                <Box>
                    <FlatList data={task} renderItem={({ item }) =>
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