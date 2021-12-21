import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

const CustomInput=({value, setValue, placeholder, secureTextEntry}) =>{
    return (
        <View style={styles.container}>
            <TextInput  placeholder={placeholder} style={styles.input} value={value} onChangeText={setValue}
            secureTextEntry={secureTextEntry}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
    // backgroundColor: 'white',
    // width: '85%',
    // height: 40,
    // borderColor: 'green',
    // borderWidth: 1,
    // borderRadius: 5,
    // marginVertical: 5,
        
    },
   input: {
    padding: 10,
   },
    
   
 });
 export default CustomInput;
