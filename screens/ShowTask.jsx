import { React } from 'react';
import { AntDesign } from "@expo/vector-icons";
import { NativeBaseProvider, Fab, Icon, HStack, Box, Spacer, Text, ScrollView, Heading, Avatar, VStack, FlatList } from 'native-base';
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function ShowTask() {

    const [task, taskse] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/todos")
            .then((response) => {
                taskse(response.data);
                console.log(response);
            })

    }, []);
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
                                <Avatar size="48px" source={{
                                    uri: item.id
                                }} />
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
                                <Spacer />
                                <Text fontSize="xs" _dark={{
                                    color: "warmGray.50"
                                }} color="coolGray.800" alignSelf="flex-start">
                                    {item.timeStamp}
                                </Text>
                            </HStack>
                        </Box>} keyExtractor={item => item.id} />
                </Box>
            </ScrollView>
        </NativeBaseProvider>
    )
}