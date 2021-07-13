import React from "raect";
import { StyleSheet,View,Text,ActivityIndicator } from "react-native";
import {Overlay} from "react-native-elements";

export default function Loading(props){
    const {isVisible,text}=props;
    return(
        <Overlay isVisible ={}>
            <View>
                <ActivityIndicator size="large" color ="#00a680"/>
                {text && <Text>{text}</Text>}
            </View>
        </Overlay>
    );
}
const styles=StyleSheet.create({
    overlay:{
        height:100,
        width:200,
        backgroundColor:"#fff",
        nborderColor:"#00a680",
        borderWidth:2,
        borderRadius:100,
    }
});