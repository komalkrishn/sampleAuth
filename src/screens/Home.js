import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import {auth} from '../../firebase';

 

export default function Home() {
    const navigation = useNavigation();

    const handleLogOut =()=>{
        auth.signOut()
             .then(()=>{
                navigation.replace('Login')
             })
             .catch(error =>alert(error.message))
    }
    return (
        <View style={styles.homeContainer}>
            <Text> Email {auth.currentUser?.email}</Text>
            <TouchableOpacity style={styles.button} onPress={handleLogOut} >
            <Text style={styles.buttonText}>Log Out </Text>

          </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'blue',
        width: '50%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
      },
      buttonText: {
        color: 'black',
        fontWeight: '600',
        fontSize: 15
      },
})
