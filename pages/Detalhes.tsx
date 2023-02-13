import React from "react";

export default function Detalhes({ navigation, route }) {
    //getting route params
    const { id, nome, titulo } = route.params;
    return (
        <>
            Segunda Tela{titulo}
        </>
    )
}; 