import React from 'react';
import { StyleSheet,View } from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
 

const Stack = createNativeStackNavigator();

 const App=()=> {
  return (
    <View style={styles.container}>
    <NavigationContainer>

     <Stack.Navigator 
      initialRouteName='Login'
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: 'red'
        }
      }}
     
     >
       <Stack.Screen
       name='Login'
       component={Login}
       options={{
         headerShown: false
       }}
       />
       <Stack.Screen
       name='Home'
       component={Home}
        
       />

        

     </Stack.Navigator>
      <SignInScreen  />
      
     
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBFC',
    
  },
});

export default App;