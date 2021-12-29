import React, { useState, useEffect } from "react";
import { StyleSheet, View, Button } from "react-native";
import SignInScreen from "./src/screens/SignInScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";

const Stack = createNativeStackNavigator();
const firebaseinit = initializeApp({
  apiKey: "AIzaSyDaP7-v4TB6832UQ-xd6m-aXrFEQb0xi1E",
  authDomain: "test-3fdce.firebaseapp.com",
  projectId: "test-3fdce",
  storageBucket: "test-3fdce.appspot.com",
  messagingSenderId: "75579566769",
  appId: "1:75579566769:web:93e37845cba3154b36d090",
});
const App = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const [user, Setuser] = useState(() => auth.currentUser);
  const [init, SetInit] = useState(true);

  const schema = { email: "", password: "" };
  const [cred, Setcred] = useState(schema);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      if (u) {
        Setuser(u);
      } else {
        Setuser(null);
      }
      if (init) {
        setTimeout(() => {
          SetInit(false);
        }, 200);
      }
      return unsubscribe;
    });
  }, []);

  function LOGINEnPAccount() {
    signInWithEmailAndPassword(auth, cred.email, cred.password)
      .then((userCredential) => {
        Setcred(userCredential.user);
        console.log(userCredential);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  function CreateEnPAccount() {
    createUserWithEmailAndPassword(auth, cred.email, cred.password)
      .then((userCredential) => {
        Setuser(userCredential.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }
  const LOGIN = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        Setuser(result.user);
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const LOGOUT = async () => {
    await signOut(auth)
      .then(() => {
        console.log("Success");
        Setuser(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "red",
            },
          }}
        >
          <Stack.Screen
            name="Login"
            // component={Login}
            options={{
              headerShown: false,
            }}
          >
            {() => (
              <Login
                SEP={LOGINEnPAccount}
                credSet={Setcred}
                CreateEP={CreateEnPAccount}
                login={LOGIN}
              />
            )}
          </Stack.Screen>

          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
        <SignInScreen />
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FBFC",
  },
});

export default App;
