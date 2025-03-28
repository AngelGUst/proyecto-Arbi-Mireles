import React, {useEffect, useState} from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, } from 'react-native';
import * as Location from 'expo-location';
export default function MapViewCustom(props) {
    const { latitude, longitude, title, description } = props
    const [location, setLocation] = useState(null);
    useEffect(() => {
        let subscription;

        const startTracking = async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log('Permiso de ubicación denegado');
                return;
            }

            subscription = await Location.watchPositionAsync(
                {
                    accuracy: Location.Accuracy.High,
                    timeInterval: 1000,
                    distanceInterval: 1,
                },
                (loc) => {
                    setLocation(loc.coords);
                    console.log('Ubicacion actual',loc.coords)
                }
            );
        };

        startTracking();

        return () => {
            if (subscription) subscription.remove();
        };
    }, []);
    return (
        
        <View style={styles.container}>
            <MapView style={styles.map}
                initialRegion={{
                    latitude: location.latitude | 18.850374762948366,
                    longitude: location.longitude | -99.2006711313205,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: location.latitude || 18.850374762948366,
                        longitude: location.longitude || -99.2006711313205
                    }}
                    title={title}
                    description={description}
                />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    map: {
        width: '90%',
        height: 320
    },
});
