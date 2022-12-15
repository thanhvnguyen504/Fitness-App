import React, {useContext, useState} from "react";
import {Text, StyleSheet, Button, View, TouchableOpacity, Image, ScrollView, FlatList} from 'react-native';
import { Context as LegsContext } from "../context/LegsContext";



const InnerLegs = (props) => {

    const LegsStuff = useContext(LegsContext);
    const LegsState = LegsStuff.state;
    
    const itemID = props.navigation.getParam("id");
    const itemDetails = LegsState.find((itemDetails) => {
        return itemID === itemDetails.id;
    })

    return (
        <View >
            <ScrollView>
                <View>
                    <View >
                        <Text style={styles.title}>{itemDetails.title} </Text>

                        <Image style={styles.image} source={itemDetails.imageSource} />
                        <View>

                            <Text style={styles.description}>{"\n"}{itemDetails.description} {"\n"}</Text>
                        
                        </View>
                        
                    
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        fontWeight: "bold",
        alignSelf: "center",
        padding: 5
    },
    image: {
        width: 300,
        height: 300,
        alignSelf: "center",
    },
    description: {
        fontSize: 20,
        borderWidth: 1,
    }
});

export default InnerLegs;