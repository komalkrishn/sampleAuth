import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/core";
import { auth } from "../../firebase";


const SettingTab = () => {

    const navigation = useNavigation();

  const handleLogOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };
    return (
        <View>
             <Text> Email {auth.currentUser?.email}</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogOut}>
        <Text style={styles.buttonText}>Log Out </Text>
      </TouchableOpacity>
        </View>
    )
}

export default SettingTab

const styles = StyleSheet.create({
    button: {
    backgroundColor: "blue",
    width: "50%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontWeight: "600",
    fontSize: 15,
  },
})
