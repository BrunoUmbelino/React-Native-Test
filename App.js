import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableNativeFeedback,
  Touchable,
  Button,
  Alert,
} from "react-native";

export default function App() {
  console.log("loaded");

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Button color="orange" title="Click me" />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "lightblue" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
