import { React } from 'react';
import { NativeBaseProvider, Box, FormControl, Input, Fab, Icon, Center, Heading, VStack, Link, Button, HStack, Text } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { View, TextInput, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
type FormData = {
    firstName: string;
    lastName: string;
};

export default function Home() {
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
    const onSubmit = handleSubmit(data => console.log(data));

    return (
        <NativeBaseProvider>

            <Box safeArea p="2" py="8" >
                <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
                    color: "warmGray.50"
                }}>
                    Welcome
                </Heading>
                <Heading mt="1" _dark={{
                    color: "warmGray.200"
                }} color="coolGray.600" fontWeight="medium" size="xs">
                    Sign in to continue!
                </Heading>

                <VStack space={2} mt="5" onSubmit={onSubmit}>

                    <FormControl>
                        <FormControl.Label>Email ID</FormControl.Label>
                        <Input text="text" {...register("firstName")} />
                    </FormControl>

                    <FormControl>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input type="text"{...register("lastName")} />

                    </FormControl>
                    <Button type="submit" onPress={handleSubmit(onSubmit)} mt="2" colorScheme="indigo">
                        Salvar
                    </Button>

                </VStack>
            </Box>

            <Fab renderInPortal={false} shadow={2} right={8} bottom={50} size="sm" icon={<Icon color="white" as={AntDesign} name="plus" size="4" />} />
        </NativeBaseProvider >
    )
}