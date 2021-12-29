// import React, { useState, useEffect } from "react";
// import {
//   StyleSheet,
//   View,
//   TextInput,
//   Button,
//   Alert,
//   Image,
// } from "react-native";
// import { FontAwesome } from '@expo/vector-icons';
// import Logo from "../../assets/goGreenLogo.png";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import {getAuth,signInWithEmailAndPassword, createUserWithEmailAndPassword ,signInWithPopup,signOut, GoogleAuthProvider } from "firebase/auth";


// export default function Login({ navigation, login }) {
//   const schema = {email: '', password : ''};
//   const [cred,setCred] = useState(schema);

//   const provider = new GoogleAuthProvider();
//   const auth = getAuth();
//   const[user,Setuser] = useState(() => auth.currentUser)
//   const[init,SetInit] = useState(true)

 

//   useEffect(()=>{
//     const unsubscribe = auth.onAuthStateChanged(u =>{
//       if(u){Setuser(u)}else{Setuser(null)}
//       if(init){setTimeout(()=>{SetInit(false)},200)}
//     return unsubscribe;

//     })
//   },[]);

//   const handleEmailChange =(e)=>{
//     cred.email =  e;
   
//   }
//   const handlePassChange =(e)=>{
//     cred.password =  e;
    
//   }

//  const handleSubmit=()=>{
//   console.log(cred)
//  }


//  function LOGINEnPAccount(){
//   signInWithEmailAndPassword(auth, cred.email, cred.password)
//  .then((userCredential) => {setCred(userCredential.user)})
//  .catch((error) => {
//    const errorCode = error.code;
//    const errorMessage = error.message;
//  });

// }

//  function CreateEnPAccount(){
//   createUserWithEmailAndPassword(auth, cred.email, cred.password)
//  .then((userCredential) => {Setuser(userCredential.user)})
//  .catch((error) => {
//    const errorCode = error.code;
//    const errorMessage = error.message;
   
//  });

// }

//   return (
//     <View style={styles.body}>
//       <Image source={Logo} style={styles.logo} resizeMode="contain" />

//       <TextInput
//         style={styles.input}
//         placeholder="UserName"
//         onChangeText={handleEmailChange}
//         // value={cred.email}
//         // name="email"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry
//         onChangeText={handlePassChange}
//         // value={cred.password}
//         // name="password"

//       />

//       {/* <Button title="Login" onPress={LOGINEnPAccount} /> */}
//       <Button title="Signup" onPress={CreateEnPAccount} />
//       {/* <View style={styles.buttons}> */}

// {/* <FontAwesome.Button name="apple" backgroundColor="grey" onPress={siginApple}>
//   Sign in with Apple
// </FontAwesome.Button> */}
// <FontAwesome.Button name="google" backgroundColor="pink" onPress={login}>
//   Sign in with google
// </FontAwesome.Button>
// {/* <FontAwesome.Button name="facebook" backgroundColor="#3b5998" onPress={siginFacebook}>
//   Sign in with Facebook
// </FontAwesome.Button> */}
//       {/* </View> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   body: {
//     flex: 1,
//     alignItems: "center",
//     // backgroundColor: "#0080ff",
    
//   },
//   logo: {
//     width: 100,
//     height: 200,
//     alignItems: 'center',
   
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
//   buttons: {
//     flex: 1,
//     margin: 10,
//   },
//   button1: {
//     margin: 65,
//   },
// });

import React, { useState, useEffect } from "react";
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
import {getAuth ,signInWithPopup,signOut, GoogleAuthProvider } from "firebase/auth";


export default function Login({ navigation, login,SEP,credSet,CreateEP}) {


 


  return (
    <View style={styles.body}>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />

      <TextInput
        style={styles.input}
        placeholder="UserName"
        onChangeText={(e)=>{credSet(prev=>({...prev,email:e}))}}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(e)=>{credSet(prev=>({...prev,password:e}))}}

      />

<Button title="SignIn" onPress={SEP} />
      {/* <Button title="Signup" onPress={CreateEP} /> */}
     


<FontAwesome.Button name="google" backgroundColor="pink" onPress={login}>
  Sign in with google
</FontAwesome.Button>

    </View>
  );

}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    // backgroundColor: "#0080ff",
    
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

