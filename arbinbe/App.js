import React, { useEffect, useState } from "react";
import Navigation from "./src/navigation/Navigation";
import './gesture-handler';
import { app, auth, db, storage } from './src/kernel/utils/FirebaseConnection';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Loading from "./src/kernel/components/Loading";
import NavigationLogger from "./src/navigation/NavigationLogger";
import { use } from "react"; 
//Importacion de Logbox
import { LogBox } from "react-native";
LogBox.ignoreAllLogs(true);

export default function App() {
    const [loading, setLoading] = useState(true);
    const [isLogged, setIsLogged] = useState(false);
    const auth = getAuth();

    useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("Usuario logueado", user);
                setIsLogged (true);
            }
            setLoading(false);
        });
    },[]);

    if (loading) {
        return (
            <Loading
                isVisible={true}
                title="Cargando"
                sizeActivity="large"
                color="tomato"
                activityColor="tomato"
            />
        )
    }else{
        return isLogged ? <NavigationLogger /> : <Navigation />
    }
}