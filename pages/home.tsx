import React, { useEffect, useState } from 'react';
import { NativeBaseProvider, Box, FormControl, Input, Center, Icon, Stack, Heading, VStack, Link, Button, HStack, Text } from "native-base";
import { Formik } from 'formik';
import axios from 'axios';
import ShowTask from '../screens/ShowTask';

export default function Home({ navigation }) {

    const fomulario = {
        nome: '',
        email: '',
        curso: '',
        telefone: '',
    }


    return (

        <NativeBaseProvider>
            <Center w="100%">
                <Box safeArea p="2" w="90%" maxW="290" py="8">
                    <Heading size="lg" color="coolGray.800" _dark={{
                        color: "warmGray.50"
                    }} fontWeight="semibold">
                        Restfull API
                    </Heading>
                    <Heading mt="1" color="coolGray.600" _dark={{
                        color: "warmGray.200"
                    }} fontWeight="medium" size="xs">
                        Preencha os Campos piuto
                    </Heading>
                    <Formik

                        initialValues={fomulario} onSubmit={values => axios.post("http://127.0.0.1:8000/api/salvar", values)
                            .then(() => {
                                console.log("TUDO CERTO....");
                                navigation.navigate('Show');
                            })
                            .catch(() => {
                                console.log("TUDO ERRADO..")
                            })
                        }
                    >


                        {({ handleChange, handleBlur, handleSubmit, values }) => (

                            <VStack space={3} mt="5">
                                <FormControl>
                                    <FormControl.Label>nome</FormControl.Label>
                                    <Input onChangeText={handleChange('nome')} onBlur={handleBlur('nome')} value={values.nome} />
                                </FormControl>
                                <FormControl>
                                    <FormControl.Label>Curso</FormControl.Label>
                                    <Input onChangeText={handleChange('curso')} onBlur={handleBlur('curso')} value={values.curso} />
                                </FormControl>
                                <FormControl>
                                    <FormControl.Label>email</FormControl.Label>
                                    <Input onChangeText={handleChange('email')} onBlur={handleBlur('email')} value={values.email} />
                                </FormControl>
                                <FormControl>
                                    <FormControl.Label>telefone</FormControl.Label>
                                    <Input onChangeText={handleChange('telefone')} onBlur={handleBlur('telefone')} value={values.telefone} />
                                </FormControl>
                                <Button onPress={handleSubmit} mt="2" colorScheme="indigo">  Salvar </Button>
                            </VStack>
                        )}
                    </Formik>
                </Box>
            </Center>


        </NativeBaseProvider >
    )
}