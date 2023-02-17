import { React } from 'react';
import { AntDesign } from "@expo/vector-icons";
import { NativeBaseProvider, Fab, Icon, HStack, Box, Spacer, Text, ScrollView, Heading, Avatar, VStack, FlatList, Button } from 'native-base';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function ShowTask({ navigation }) {

    const [task, taskse] = useState([]);

    useEffect(() => {

        axios.get("http://reactjs-front.com/BackEnd-Laravel/public/api/todos")
            .then((response) => {
                taskse(response.data);
            })
    }, []);


    function apagar(id) {
        axios.post(`http://reactjs-front.com/BackEnd-Laravel/public/api/${id}`)
            .then(() => {
                navigation.navigate('Show');
                // console.log('esse gajo foi elimi multiTanes nado  digitalhost ');

            })
            .catch(error => {
                console.log(error);
            });
    }


    return (
        <NativeBaseProvider>
            <ScrollView>
                <Box>
                    <FlatList data={task} renderItem={({
                        item
                    }) => <Box borderBottomWidth="1" _dark={{
                        borderColor: "muted.50"
                    }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
                            <HStack space={[2, 3]} justifyContent="space-between">
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
                                    <TouchableOpacity >
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