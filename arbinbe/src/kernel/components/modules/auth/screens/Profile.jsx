import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import AvatarProfile from "../components/profile/AvatarProfile";
import { getAuth } from "firebase/auth";
import MenuProfile from "../components/profile/MenuProfile";

export default function Profile() {
    const auth = getAuth();
    const [user, setUser] = useState(auth.currentUser);

    const openModal = (title) => {
        console.log("title -> ", title);
    };

    return (
        <View style={styles.container}>
            <AvatarProfile user={user} />
            <MenuProfile openModal={openModal} />
            <Button
                title="Cerrar Sesión"
                onPress={() => {
                    auth.signOut();
                }}
                containerStyle={{ margin: 16 }}
                buttonStyle={{
                    backgroundColor: "white",
                    borderWidth: 1,
                    borderColor: "green",
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: "white",
    },
});