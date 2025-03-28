import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import PagerView from 'react-native-pager-view';
import { map } from "lodash";
import { Image, AirbnbRating } from "@rneui/base";
import MapViewCustom from "../../../MapViewCustom";

export default function HouseDetail(props) {
    const { route: { params } } = props;

    const { images, title, description, price, rating, address } = params;
    console.log("HouseDetail", props);
    props.navigation.setOptions({ title: title });
    return (
        <View style={styles.containe} >
            <ScrollView>
                <PagerView style={{ height: 256 }}>
                    {map(images, (item) => (
                        <View key={item}>
                            <Text>{item}</Text>
                            <Image source={{ uri: item }} style={{ width: "100%", height: 256 }} />
                        </View>
                    ))}
                </PagerView>

                <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 8, }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }} >{title}</Text>
                    <View style={{ flexDirection: "column" }}>
                        <AirbnbRating
                            count={5}
                            defaultRating={rating ? rating : 1}
                            size={8}
                            showRating={false}
                            isDisabled
                        />

                        <Text style={{ color: "green" }}>${price}</Text>
                    </View>

                </View>
                <View>
                    <Text style={{ fontSize: 14, color: "gray", marginHorizontal: 8 }}>{description}</Text>
                </View>
                <MapViewCustom
                    latitude={address.latitude}
                    longitude={address.longitude}
                    title={title}
                    description={description}
                /> 
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    containe: {
        flex: 1,
        backgroundColor: "#fff"
    }
});