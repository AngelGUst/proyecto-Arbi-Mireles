import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PagerView from 'react-native-pager-view';
import { map } from "lodash";
import { Image } from "@rneui/base";

export default function HouseDetail(props) {
    const { route: { params } } = props;

    const { images, title, description, price, rating } = params;
    console.log("HouseDetail", props);
    console.log("HoulseDetail", props);

    props.navigation.setOptions
    return (
        <View >
            <PagerView style={{height:256}}>
                {map(images,(item) =>(
                    <View key={item}>
                        <Text>{item}</Text>
                        <Image source={{ uri: item }} style={{width: "100%", height: 256}}/>
                    </View>
                ))}
            </PagerView>
        </View>
    );
}

const styles = StyleSheet.create({
    containe:{
        flex: 1,
        backgroundColor: "#fff"
    }
});