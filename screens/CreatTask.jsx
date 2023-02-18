import React from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import { NativeBaseProvider, Box, FormControl, Input, Alert, IconButton, Stack, Icon, Center, Heading, VStack, Collapse, Button, HStack, Text, Hidden } from "native-base";
import { useState } from 'react';

export default function CreatTask({ route }) {
    const [show, setShow] = React.useState(false);

    const [errorMessage, setErrorMessage] = useState([]);

    const { id, nome, curso, email, telefone } = route.params;
    const fomulario = {
        id: id,
        nome: nome,
        email: email,
        curso: curso,
        telefone: telefone,
    }
    return (
        <NativeBaseProvider>

            <Center w="100%">
                <Box safeArea p="2" w="90%" maxW="290" py="8">
                    <Heading size="lg" color="coolGray.800" _dark={{
                        color: "warmGray.50"
                    }} fontWeight="semibold">
                        Restfull API Update
                    </Heading>

                    <Heading mt="1" color="coolGray.600" _dark={{
                        color: "warmGray.200"
                    }} fontWeight="medium" size="xs">
                        Update
                    </Heading>


                    {/* Alerta */}
                    <Collapse isOpen={show}>
                        <Alert maxW="400" status="error">
                            <VStack space={1} flexShrink={1} w="100%">
                                <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
                                    <HStack flexShrink={1} space={2} alignItems="center">
                                        <Alert.Icon />
                                        <Text fontSize="md" fontWeight="medium" _dark={{
                                            color: "primary.900"
                                        }}>
                                            Please try again later!
                                        </Text>
                                    </HStack>
                                </HStack>
                                <Box pl="6" _dark={{
                                    _text: {
                                        color: "coolGray.600"
                                    }
                                }}>
                                    {errorMessage ? <Text>{errorMessage}</Text> : null}
                                </Box>
                            </VStack>
                        </Alert>
                    </Collapse>
                    {/* Fim da alerta */}

                    <Formik

                        initialValues={fomulario} onSubmit={values => axios.post("http://127.0.0.1:8000/api/update", values)

                            .then(() => {
                                navigation.navigate('Tabs',);
                            })
                            .catch((error) => {
                                setShow(true);
                                setErrorMessage(error.response.data.message);

                            })
                        }
                    >


                        {({ handleChange, handleBlur, handleSubmit, values }) => (

                            <VStack space={3} mt="5">
                                <Hidden>
                                    <Input Disabled="true" onChangeText={handleChange('id')} onBlur={handleBlur('id')} value={values.id} />
                                </Hidden>

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
