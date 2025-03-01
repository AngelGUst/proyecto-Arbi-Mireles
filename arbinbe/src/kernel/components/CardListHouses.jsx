import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import{Image, Card, AirbnbRating} from '@rneui/base'

export default function CardListHouses(props) {
    const {image, title, description, price, rating} = props;
    return (
        <Card>
            <View style={{ flexDirection: 'row' }}>
                <Image
                    source={{ uri: image ? image: 'https://placehold.co/128x128.png' }}
                    style={{ width: 128, height: 128 }}
                />
                <View style={{ flex: 1, flexDirection: 'column', marginLeft: 8 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: 'fold' }}>{title ? title : ''}</Text>
                        <AirbnbRating
                            count={5}
                            defaultRating={rating ? rating:1}
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
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    }
})