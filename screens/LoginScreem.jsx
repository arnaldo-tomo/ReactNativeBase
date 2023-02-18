import { Box, Center, Text, NativeBaseProvider, HStack, Heading, VStack, FormControl, Input, Spacer, Button } from 'native-base';
import React from 'react';
export default function LoginScrewm() {
    return (
        <NativeBaseProvider >
            <VStack flex={1} bgColor="white" justifyContent="space-between">
                <Box mt="10" borderRadius="4" marginX="4" paddingTop="70" >
                    <Center>
                        <Heading>Login</Heading>
                        <Text>para se ogar entre com as suas credencias bby</Text>
                    </Center>

                    <FormControl space={3} mt="5">
                        <FormControl.Label>Email</FormControl.Label>
                        <Input type='email' placeholder='Email@gmail.com'></Input>
                    </FormControl >
                    <FormControl space={3} mt="2">
                        <FormControl.Label>nome</FormControl.Label>
                        <Input type='password' placeholder='****************'></Input>
                    </FormControl>
                    <Button space={3} mt="5" bgColor={'primary.400'} type="submit">Entrar</Button>
                </Box>
            </VStack>

        </NativeBaseProvider>

    )
}

