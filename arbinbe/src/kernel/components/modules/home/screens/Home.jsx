import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CardListHouses from '../../../CardListHouses';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../../../utils/FirebaseConnection';

export default function Home() {
    const [houses, setHouses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const querySnapshot = await getDocs(collection(db, "houses"));
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
            });
        })()
    }, []);
    return (
        <View style={styles.container}>
            <CardListHouses
                image="https://placehold.co/128x128.png"
                title="casa"
                description="casa de playa"
                price={100}
                rating={3.5}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});
