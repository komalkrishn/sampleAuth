import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Button,
} from "react-native";
import { Camera } from "expo-camera";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Button, Platform } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { Entypo } from "@expo/vector-icons";

const ProfileTab = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [age, setAge] = useState("");
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [imageUri, setImageUri] = useState("");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const getData = async () => {
    try {
      const firstNameValue = await AsyncStorage.getItem("firstName");
      if (firstNameValue !== null) {
        setFirstName(firstNameValue);
      }
      const lastNameValue = await AsyncStorage.getItem("lastName");
      if (lastNameValue !== null) {
        setLastName(lastNameValue);
      }
      const addressValue = await AsyncStorage.getItem("address");
      if (addressValue !== null) {
        setAddress(addressValue);
      }
      const numberValue = await AsyncStorage.getItem("number");
      if (numberValue !== null) {
        setNumber(numberValue);
      }
      const ageValue = await AsyncStorage.getItem("age");
      if (ageValue !== null) {
        setAge(ageValue);
      }
      const dateValue = await AsyncStorage.getItem("date");
      if (dateValue !== null) {
        setDate(dateValue);
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const storeData = async (firstName, lastName, address, number, age, date) => {
    try {
      await AsyncStorage.setItem("firstName", firstName);
      await AsyncStorage.setItem("lastName", lastName);
      await AsyncStorage.setItem("address", address);
      await AsyncStorage.setItem("number", number);
      await AsyncStorage.setItem("age", age);
      await AsyncStorage.setItem("date", new Date(date));
    } catch (e) {
      console.log(e);
    }
  };

  const saveData = async () => {
    await storeData(firstName, lastName, address, number, age, date);
    Alert.alert("Data is saved successfully");
  };

  const openCamera = () => {
    let options = {
      storageOption: {
        path: "images",
        mediaType: "photo",
      },
      includeBase64: true,
    };
    launchCamera(options, (response) => {
      console.log("Response", response);
      if (response.didCancel) {
        console.log("user cancelled image piucjer");
      } else if (response.error) {
        console.log("image picker error", response.error);
      } else if (response.customButton) {
        console.log("user taped custom button", response.customButton);
      } else {
        //display image using data:
        const source = { uri: "data:image/jpeg;base64," + response.base64 };
        setImageUri(source);
      }
    });
  };

  const openGallery = () => {
    let options = {
      storageOption: {
        path: "images",
        mediaType: "photo",
      },
      includeBase64: true,
    };
    launchImageLibrary(options, (response) => {
      console.log("Response", response);
      if (response.didCancel) {
        console.log("user cancelled image piucjer");
      } else if (response.error) {
        console.log("image picker error", response.error);
      } else if (response.customButton) {
        console.log("user taped custom button", response.customButton);
      } else {
        //display image using data:
        const source = { uri: "data:image/jpeg;base64," + response.base64 };
        setImageUri(source);
      }
    });
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="FirstName"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="LastName"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Address"
        value={address}
        onChangeText={(text) => setAddress(text)}
        style={styles.input}
      />

      <TextInput
        placeholder="number"
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(text) => setNumber(text)}
        value={number}
      />
      <TextInput
        placeholder="Age"
        value={age}
        onChangeText={(text) => setAge(text)}
        style={styles.input}
      />

      <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}

      <Text>{date.toLocaleDateString()}</Text>

      <TouchableOpacity style={styles.button} onPress={() => saveData()}>
        <Text style={styles.text}> Save </Text>
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <Button
          onPress={() => {
            openCamera();
          }}
        >
          Camera
          <Entypo name="camera" size={24} color="black" />
        </Button>
        <Image
          source={imageUri}
          style={{
            height: 100,
            width: 100,
            borderRadius: 100,
            borderWidth: 2,
            borderColor: "black",
          }}
        />

        <Button
          onPress={() => {
            openGallery();
          }}
        >
          Gallery
          <Entypo name="images" size={24} color="black" />
        </Button>
      </View>
    </View>
  );
};

export default ProfileTab;

const styles = StyleSheet.create({
  inputContainer: {
    width: "80%",
    marginTop: 100,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    flex: 1,
    flexDirection: "row",
    color: "black",
    fontWeight: "bold",
    backgroundColor: "green",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 15,
    marginTop: 5,
    width: "70%",
    height: 50,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  button: {
    backgroundColor: "blue",
    width: "20%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
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
