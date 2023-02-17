import { NativeBaseProvider, Text } from 'native-base';
export default function Actualizar({ route }) {

    const { id } = route.parms;
    return (
        <NativeBaseProvider>
            <Text>
                Tela de update nao ::: {id}
            </Text>
        </NativeBaseProvider>
    )
}

