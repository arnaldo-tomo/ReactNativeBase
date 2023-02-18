import React from 'react';
import { NativeBaseProvider, Box, FormControl, Input, Fab, Icon, Center, Heading, VStack, Link, Button, HStack, Text } from "native-base";

export default function Actualizar({ route }) {
    const { nome } = route.params;

    return (
        <NativeBaseProvider>
            <Box safeArea p="2" py="8" >
                <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{ color: "warmGray.50" }}>
                    Welcome {nome}
                </Heading>


            </Box>
        </NativeBaseProvider>
    )
}

