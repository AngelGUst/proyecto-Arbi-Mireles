import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TopFive from "../../../kernel/components/modules/topfive/screens/TopFive";

const Stack = createStackNavigator();

export default function TopFiveStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="TopFive"
                component={TopFive}
                options={{title: "Top 5"}}
            />
        </Stack.Navigator>
    )
}