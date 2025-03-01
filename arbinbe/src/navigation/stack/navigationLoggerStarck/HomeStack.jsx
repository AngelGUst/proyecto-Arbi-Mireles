import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../../kernel/components/modules/home/screens/Home";


const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="LoginStack">
            <Stack.Screen
                name="LoginStack"
                component={Home}
                options={{ title: "Iniciar sesión" }}
            />
        </Stack.Navigator>
    );
}