import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      {/* <Text>Open up App.js to start working on your app! Thats Cool</Text>
      <Image style={styles.imageStyle} source={require("./assets/icon.png")} />
      <TextInput
        style={{
          backgroundColor: "lightgrey",
          marginBottom: 20,
          marginTop: 20,
        }}
      ></TextInput>
      <TouchableOpacity style={{ backgroundColor: "#DDDDDD", padding: 10 }}>
        <Text style={{ width: 220, backgroundColor: "pink" }}>Button</Text>
      </TouchableOpacity>
      <StatusBar style="auto" /> */}
      <View style={{ flex: 0.2, backgroundColor: "red" }}>
        <Image
          source={require("./assets/icon.png")}
          style={{
            width: 100,
            height: 100,
            alignSelf: "center",
            marginTop: 20,
          }}
        ></Image>
      </View>
      <View
        style={{ flex: 0.7, backgroundColor: "blue", alignItems: "center" }}
      >
        <TextInput
          style={{
            width: 100,
            height: 30,
            backgroundColor: "gray",
            marginBottom: 30,
            marginTop: 20,
          }}
          placeholder="name"
        ></TextInput>
        <TextInput
          style={{
            width: 100,
            height: 30,
            backgroundColor: "gray",
            marginBottom: 30,
          }}
          placeholder="password"
        ></TextInput>
        <TextInput
          style={{
            width: 100,
            height: 30,
            backgroundColor: "gray",
            marginBottom: 30,
          }}
          placeholder="email"
        ></TextInput>
        <TextInput
          style={{
            width: 100,
            height: 30,
            backgroundColor: "gray",
            marginBottom: 30,
          }}
          placeholder="Gender"
        ></TextInput>
        <TextInput
          style={{
            width: 100,
            height: 30,
            backgroundColor: "gray",
            marginBottom: 30,
          }}
          placeholder="City"
        ></TextInput>
      </View>
      <View style={{ flex: 0.1, backgroundColor: "orange" }}>
        <TouchableOpacity style={{ width: 400, height: 300 }}>
          <Text>S ign UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  imageStyle: {
    width: 400,
    height: 400,
    backgroundColor: "green",
  },
});
