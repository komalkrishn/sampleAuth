import React, { useState, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/core";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Camera } from "expo-camera";
import { auth } from "../../firebase";

export default function Home() {
  const [showCamera, setShowCamera] = useState(false);
  const [image, setImage] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  //camera ref to access camera
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  //taaking photo
  const takePhot = async () => {
    if (cameraRef) {
      console.log("taking picture");
      try {
        let photo = await cameraRef.current.takePictureAsync({
          allowsEditing: true,
          aspect: [4, 2],
          quality: 1,
        });
        return photo;
      } catch (error) {
        console.log(error);
      }
    }
  };

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
    <View style={styles.homeContainer}>
      <Text> Email {auth.currentUser?.email}</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogOut}>
        <Text style={styles.buttonText}>Log Out </Text>
      </TouchableOpacity>

      {/* <View style={styles.inputContainer}>
        <TextInput
          placeholder="FirstName"
          // value={email}
          // onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="LastName"
          // value={email}
          // onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Address"
          // value={email}
          // onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />

        <TextInput
        placeholder="PhoneNumber"
          style={styles.input}
          keyboardType="numeric"
          // onChangeText={(text) => onChanged(text)}
          // value={number}
        /> */}
        <View style={styles.CameraContainer}>
          {showCamera ? (
            <Camera style={styles.camera} type={type} ref={cameraRef}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.cameraButton}
                  onPress={() => {
                    setType(
                      type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                  }}
                >
                  <Text style={styles.text}> Flip </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.cameraButton}
                  onPress={async () => {
                    const r = await takePhoto();
                    if (!r.cancelled) {
                      setImage(r.uri);
                    }
                    setShowCamera(false);
                  }}
                >
                  <Text style={styles.text}> Photo </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.cameraButton}
                  onPress={async () => {
                    setShowCamera(false);
                  }}
                >
                  <Text style={styles.text}> Cancel </Text>
                </TouchableOpacity>
              </View>
            </Camera>
          ) : (
            //when the camear is not showing
            <View style={{ flex: 1 }}>
              <View style={styles.picture}>
                <View style={{ width: "100%", alignItems: "center" }}>
                  {image && (
                    <Image
                      source={{ uri: image }}
                      style={{
                        width: 200,
                        height: 200,
                        backgroundColor: "blue",
                      }}
                    />
                  )}
                </View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setShowCamera(true)}
                >
                  <Text style={styles.text}> Take Picture </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </View> 
    //  </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  // button: {
  //   backgroundColor: "blue",
  //   width: "50%",
  //   padding: 15,
  //   borderRadius: 10,
  //   alignItems: "center",
  // },
  // buttonText: {
  //   color: "black",
  //   fontWeight: "600",
  //   fontSize: 15,
  // },

  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
  },
  input: {
    // flex: 1,
    // flexDirection: "row",
    width: "70%",
    height: 50,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: "green",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 15,
    marginTop: 5,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "red",
    borderRadius: 15,
    flexDirection: "row",
    // margin: 200,
  },
  cameraContainer: {
    flex:1
  },
  camera: {
    flex: 1
  },
  cameraButton: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    color: "red",
    fontWeight: "bold",
  },
  picture: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
