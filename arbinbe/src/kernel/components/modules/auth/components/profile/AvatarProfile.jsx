import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "@rneui/base";

export default function AvatarProfile(props) {
    // Desestructura `user` de `props` dentro del componente
    const { user } = props;

    return (
        <View style={styles.container}>
            <Avatar
                rounded
                size="large"
                source={user.photoURL ? { uri: user.photoURL } : { uri: "https://placehold.co/50x50/png" }}
            />
            <View style={{ flexDirection: "column", marginLeft: 8, justifyContent: "center"}}>
                <Text style={{ fontWeight: "bold" }}>{user.displayName ? user.displayName : "Anonimo"}</Text>
                <Text>{user.email}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        margin: 15,
    },
});