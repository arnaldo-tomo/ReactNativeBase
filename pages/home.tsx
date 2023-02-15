import React from 'react';
import { View, TextInput, Alert } from "react-native";
import { NativeBaseProvider, Box, FormControl, Input, Fab, Icon, Stack, Heading, VStack, Link, Button, HStack, Text } from "native-base";
import { useForm, Controller } from "react-hook-form";
import { useState } from 'react';
export default function Home() {

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstName: '',
            lastName: ''
        }
    });
    const onSubmit = data => console.log(data);

    return (

        <NativeBaseProvider>


        </NativeBaseProvider >
    )
}