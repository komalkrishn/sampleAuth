import React from 'react'
import { View, StyleSheet, TextInput, Text, Pressable } from 'react-native'

const CustomButton = ({onPress, text, bgColor, fgColor}) => {
    return (
        <Pressable onPress={onPress} style={[styles.container, bgColor ? {backgroundColor: bgColor} : {}]}>
            <Text style={[styles.text, fgColor ? {color: fgColor} : {}]}>{text}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    container: {
    // backgroundColor: 'green',
    // width: '80%',
    // padding: 15,
    // marginVertical: 10,
    // alignItems: 'center',
    // borderRadius: 5
    },
    
   text: {
    fontWeight: 'bold',
    color: 'white',
   }
 });

export default CustomButton
