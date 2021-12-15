import React from 'react'
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../../screens/signInScreen/SignInScreen';


const Stack = createNativeStackNavigator();
 const SignInNavigator=()=> {
    return (
         <Stack.Navigator>
             <Stack.Screen name='home' component={SignInScreen} />
         </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})

export default SignInNavigator;
