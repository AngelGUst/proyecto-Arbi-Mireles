import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/base";
import LoginStack from "./stack/LoginStack";
import CreatAccount from "../kernel/components/modules/auth/screens/CreatAccount";

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        const { iconName, iconType } = getIconName(route.name, focused);
                        return (
                            <Icon name={iconName} type={iconType} size={size} color={color} />
                        );
                    },
                    tabBarActiveTintColor: "tomato",
                    tabBarInactiveTintColor: "gray",
                    headerShown: false,
                })}
            >
                <Tab.Screen 
                    name="Login"
                    component={LoginStack}
                    options={{ title: "Iniciar sesion" }}
                />
                <Tab.Screen 
                    name="CreateAccount"
                    component={CreatAccount}
                    options={{ title: "Crear Cuenta" }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const getIconName = (routeName, focused) => {
    let iconName = "";
    let iconType = "material-community";
    switch (routeName) {
    case "Login":
        iconName = focused ? "account" : "home-outline";
        break;
    case "CreateAccount":
        iconName = focused ? "account-plus" : "account-plus-outline";       
        break;
    }
    return { iconName, iconType };
};