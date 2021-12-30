import React, { useState, useEffect } from "react";
import { StyleSheet, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import firebase from "firebase";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";

const Stack = createNativeStackNavigator();
const firebaseConfig = {
  apiKey: "AIzaSyClIlV4ySAZBrj5751RDganbBrIbJV09wo",
  authDomain: "fir-login-207a8.firebaseapp.com",
  projectId: "fir-login-207a8",
  storageBucket: "fir-login-207a8.appspot.com",
  messagingSenderId: "756339758439",
  appId: "1:756339758439:web:421ee71526c3b3d3a80bc2"
};
const App = () => {

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          ></Stack.Screen>
            
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#F9FBFC",
  },
});

export default App;
