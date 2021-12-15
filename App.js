import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import SignInScreen from './src/screens/signInScreen/SignInScreen';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/components/navigation/TabNavigator';

 const App=()=> {
  return (
    <NavigationContainer>

    <SafeAreaView style= {styles.container}>
      <SignInScreen />
      <TabNavigator />
    </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBFC',
    
  },
});

export default App;