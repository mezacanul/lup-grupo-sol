import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, Pressable } from "react-native";
import { Video } from "expo-av";

export default function RootLayout() {
  const [showVideo, setShowVideo] = useState(false);
  const { height } = Dimensions.get("window");
  const mainFontSize = height * 0.04;
  const secondaryFontSize = height * 0.02;

  return (
    <View style={styles.container}>
      <Video
        source={require("../assets/marzo_2025.mp4")}
        style={styles.video}
        resizeMode="cover"
        isLooping
        shouldPlay
        isMuted={false}
        volume={1.0}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  heading: {
    fontWeight: "300",
    color: "white",
  },
  mainHeading: {
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  video: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});