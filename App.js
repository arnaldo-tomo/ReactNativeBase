import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainStack } from "./src/Navigation/StackNavigation";
import TabsNavigation, { Primeiro, primeiro } from "./Router/Route";
export default function App() {
  return (
    // <MainStack />
    // <TabsNavigation />
    <Primeiro />
  );
}


