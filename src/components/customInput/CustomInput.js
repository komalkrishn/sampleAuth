import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

const CustomInput=({value, setValue, placeholder, secureTextEntry}) =>{
    return (
        <View style={styles.container}>
            <TextInput  placeholder={placeholder} style={styles.input} value={value} onChangeText={setValue}
            secureTextEntry={true}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
    backgroundColor: 'white',
    width: '90%',
    height: 40,
    borderColor: '#9dc3d5',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
        
    },
   input: {
    
   }
 });
 export default CustomInput;
