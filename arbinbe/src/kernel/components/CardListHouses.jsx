import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Image, Card, AirbnbRating } from '@rneui/base';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { count } from 'firebase/firestore';

export default function CardListHouses(props) {
    const { images, title, description, price, rating, view,count  } = props;
    const navigation = useNavigation(); // Use the useNavigation hook

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(view ? view : "", { images, title, description, price, rating,count, view, navigation})}
        >
            <Card>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={{ uri: images ? images[0] : 'https://placehold.co/128x128.png' }}
                        style={{ width: 128, height: 128 }}
                    />
                    <View style={{ flex: 1, flexDirection: 'column', marginLeft: 8 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontWeight: 'bold' }}>{title ? title : ''}</Text>
                            <AirbnbRating
                                count={5}
                                defaultRating={rating ? rating : 1}
                                size={8}
                                showRating={false}
                                isDisabled
                            />
                        </View>
                        <Text style={{ color: 'gray' }}>
                            {description ? description : ''}
                        </Text>
                        <Text>{price ? `$${price}` : 'No disponible'}</Text>
                    </View>
                </View>
            </Card>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    }
});