import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Camera } from "expo-camera";
import { AntDesign } from "@expo/vector-icons";

const ProfileTab = () => {
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
  return (
    <View style={styles.inputContainer}>
        hello
      {/* <TextInput
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
        placeholder="LastName"
        // value={email}
        // onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        // onChangeText={(text) => onChanged(text)}
        // value={number}
      />
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
                    style={{ width: 200, height: 200, backgroundColor: "blue" }}
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
      </View> */}
    </View>
  );
};

export default ProfileTab;

const styles = StyleSheet.create({
  inputContainer: {
    width: "80%",
    marginTop: 100,
  },
  input: {
    flex: 1,
    flexDirection: "row",
    color: "black",
    backgroundColor: "green",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 15,
    marginTop: 5,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
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
