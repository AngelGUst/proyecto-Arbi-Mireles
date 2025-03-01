import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image, Input, Button, Icon } from "@rneui/base";
import { isEmpty } from "lodash";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login(props) {
    const { navigation } = props;
    const [showPassword, setShowPassword] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({
        email: "",
        password: "",
    });

    const handleLogin = () => {
        if (isEmpty(email) || isEmpty(password)) {
            setError({
                email: isEmpty(email) ? "El correo es requerido" : "",
                password: isEmpty(password) ? "La contraseña es requerida" : "",
            });
        } else {
            setError({ email: "", password: "",});
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    console.log(userCredential);
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
        }

    };

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: "https://placehold.co/50x50/png" }}
                style={{ width: 50, height: 50 }}
            />
            <Text>Login</Text>
            <View style={{ margin: 16 }}>
                <Input
                    placeholder="Correo Electrónico"
                    label="Correo Electrónico"
                    keyboardType="email-address"
                    inputContainerStyle={{ width: "100%" }}
                    onChangeText={(text) => setEmail(text)}
                    errorMessage={error.email}
                />

                <Input
                    placeholder="Contraseña"
                    label="Contraseña"
                    secureTextEntry={showPassword}
                    inputContainerStyle={{ width: "100%" }}
                    rightIcon={{
                        name: showPassword ? "eye-off" : "eye",
                        type: "material-community",
                        onPress: () => setShowPassword(!showPassword),
                    }}
                    onChangeText={(text) => setPassword(text)}
                    errorMessage={error.password}
                />

                <Button title="Incio de sesion" onPress={handleLogin} />

                <Button
                    type="clear"
                    title="Crear Cuenta"
                    onPress={() => navigation.navigate("CreatAccountStack")}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
