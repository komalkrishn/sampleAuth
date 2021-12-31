import React, { useState, useEffect } from "react";
import { StyleSheet, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from "./src/screens/Login";
import HomeTab from "./src/Tabs/HomeTab";
import ProfileTab from "./src/Tabs/ProfileTab";
import SettingTab from "./src/Tabs/SettingTab";

const Tab = createBottomTabNavigator();

const BottomTabs = () =>{
  return(
    <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeTab} />
    <Tab.Screen name="Profile" component={ProfileTab} />

    <Tab.Screen name="Settings" component={SettingTab} />
  </Tab.Navigator>
  )
}

const Stack = createNativeStackNavigator();

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
            
          <Stack.Screen name="Home" component={BottomTabs}  options={{
              headerShown: false,
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
