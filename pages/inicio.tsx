import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import Sobre from './../pages/Sobre';


export default function Inicio({ navigation, route }) {
    return (
        <View>

            <Button
                title="Go to About Screen"
                onPress={() => navigation.navigate('Inicio')}
            />
        </View>
    )
}