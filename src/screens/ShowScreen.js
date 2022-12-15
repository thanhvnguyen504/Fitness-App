import React ,{useContext}from "react";
import { View,Text,StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import {FontAwesome} from "@expo/vector-icons";

const ShowScreen = (props) => {
    const {state} = useContext(Context);

    const blogID = props.navigation.getParam("id");

    const blogPost = state.find((blogPost) => {
        return blogID === blogPost.id;
    })

    return <View>
        <Text style={styles.title}>{blogPost.title}</Text>
        <Text style={styles.text}>{blogPost.content}</Text>
    </View>

}

ShowScreen.navigationOptions = (props) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => {props.navigation.navigate("Edit",{id: props.navigation.getParam("id")})}}>
                <FontAwesome name="pencil" size={30}/>
            </TouchableOpacity>
        ),
    };
}


const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: "bold",
        alignSelf: "center",
    },
    text: {
        fontSize: 20,
        alignSelf: "center",

    }
});

export default ShowScreen;