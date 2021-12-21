import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Alert,
  Image,
} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import Logo from "../../assets/goGreenLogo.png";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const siginFacebook = () => {
    console.warn("sign in with Facebook");
  };
  const siginGoogle = () => {
    console.warn("sign in with Google");
  };
  const siginApple = () => {
    console.warn("sign in with Apple");
  };

  const setData = async () => {
    if (username.length == 0 && password.length == 0) {
      Alert.alert("warning", "please enter valid chars");
    } else {
      try {
        (await AsyncStorage.setItem("Username", username));
        navigation.navigate("Home");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.body}>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />

      <TextInput
        style={styles.input}
        placeholder="UserName"
        onChangeText={(value) => setUsername(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(value) => setPassword(value)}
      />

      <Button title="Login" onPress={setData} />
      {/* <View style={styles.buttons}> */}

<FontAwesome.Button name="apple" backgroundColor="grey" onPress={siginApple}>
  Sign in with Apple
</FontAwesome.Button>
<FontAwesome.Button name="google" backgroundColor="pink" onPress={siginGoogle}>
  Sign in with google
</FontAwesome.Button>
<FontAwesome.Button name="facebook" backgroundColor="#3b5998" onPress={siginFacebook}>
  Sign in with Facebook
</FontAwesome.Button>
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0080ff",
    
  },
  logo: {
    width: 100,
    height: 200,
    alignItems: 'center',
   
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttons: {
    flex: 1,
    margin: 10,
  },
  button1: {
    margin: 65,
  },
});
