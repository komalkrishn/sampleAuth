import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

 const SettingsTab=()=>{
    return (
        <View style={styles.container}>
            {/* <Text style={styles.text}>Custom Settings tab navigator</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#76a6ef',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        // color: 'red',
    }
});

export default SettingsTab;