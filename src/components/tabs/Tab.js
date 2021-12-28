import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

 const Tab=({tab, icon, onPress, color})=> {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {icon && <AntDesign name={icon} size={20} color={color} /> }
             <Text style={{color}}>{tab.name} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // padding: 5,
         
    },
     
})
export default Tab;
