import React from "react";
import {View,Text,StyleSheet, TextInput, Button} from "react-native";


type InputBlockPropsType = {
    placeholder: string,
    title: string

}


export const InputBlock = (props: InputBlockPropsType) => {
    return (
        <View style={styles.inputBlock}>
            <TextInput placeholder={props.placeholder} style={styles.input}/>
            <Button title={props.title} onPress={()=> {console.log('fff')}} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputBlock: {
        display:"flex",
        flexDirection:"row",
        justifyContent: 'space-between',
        marginTop: 10,
    },
    input: {
        width: "55%",
        borderBottomColor: 'blue',
        borderBottomWidth: 2,
        borderStyle: 'solid',
        marginLeft: 10

    }
})