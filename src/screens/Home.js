import React, {useState, useEffect} from 'react'
import {  StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Home({navigation, route}) {
    const [welcomeNote, setWelcomeNote] = useState('');
    
    useEffect(() => {
       getData();
    }, [])
    const getData=()=>{
        try {
           AsyncStorage.getItem('Username').then(value =>{
               if(value !=null){
                //    setHomeNote(value);
                navigation.navigate('Home')
               }
           })
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <View>
            <Text> welcome{welcomeNote}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
