import React,{ useState }from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image, Input, Button} from "@rneui/base";
import { isEmpty } from "lodash";
import { useNavigation } from "@react-navigation/native";
export default function CreatAccount() {
    const navigation = useNavigation();
    const [showPassword, setShowPassword] = useState(true);
    const [showPassword2, setShowPassword2] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [error, setError] = useState({ email: "", password: "", password2: "" });

    const handleLogin = () => {
        if (isEmpty(email) || isEmpty(password) || isEmpty(password2)) {
            setError({
                email: isEmpty(email) ? "El correo es requerido" : "",
                password: isEmpty(password) ? "La contraseña es requerida" : "",
                password2: isEmpty(password2) ? "Falta confirmación de contraseña" : "",
            });
            return;
        }

        if (password !== password2) {
            setError({
                email: "",
                password: "Las contraseñas no coinciden",
                password2: "Las contraseñas no coinciden",
            });
            return;
        }

        setError({ email: "", password: "", password2: "" });
        console.log("Login", email, password, password2);
    };

    return (
        <View style={styles.container}>
            <Image source={{ uri: "https://placehold.co/50x50/png" }} style={{ width: 50, height: 50 }} />
            <Text>Crear Cuenta</Text>
            <View style={{ margin: 16 }}>
                <Input
                    placeholder="Correo Electrónico"
                    label="Correo Electrónico"
                    keyboardType="email-address"
                    inputContainerStyle={{ width: '100%' }}
                    onChangeText={setEmail}
                    errorMessage={error.email}
                />

                <Input
                    placeholder="Contraseña"
                    label="Contraseña"
                    secureTextEntry={showPassword}
                    inputContainerStyle={{ width: '100%' }}
                    rightIcon={{
                        name: showPassword ? "eye-off" : "eye",
                        type: "material-community",
                        onPress: () => setShowPassword(!showPassword),
                    }}
                    onChangeText={setPassword}
                    errorMessage={error.password}
                />

                <Input
                    placeholder="Confirmación de Contraseña"
                    label="Confirmación de Contraseña"
                    secureTextEntry={showPassword2}
                    inputContainerStyle={{ width: '100%' }}
                    rightIcon={{
                        name: showPassword2 ? "eye-off" : "eye",
                        type: "material-community",
                        onPress: () => setShowPassword2(!showPassword2),
                    }}
                    onChangeText={setPassword2}
                    errorMessage={error.password2}
                />

                <Button title="Crear Cuenta" onPress={handleLogin} />

                {/* Descomenta esto si quieres navegación */}
                {/* <Button 
                    type="clear"
                    title="Iniciar Sesión"
                    onPress={() => navigation.navigate('LoginScreen')}
                /> */}
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
