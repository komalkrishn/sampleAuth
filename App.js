import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text,Image, View, ImageBackground, SafeAreaView } from 'react-native';
import SignInScreen from './src/screens/signInScreen/SignInScreen';

export default function App() {
  return (
    <SafeAreaView style= {styles.container}>
      <SignInScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBFC',
    
  },
});
