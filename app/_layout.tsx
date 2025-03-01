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
      {showVideo ? (
        <Video
          source={require("../assets/marzo_2025.mp4")}
          style={styles.video}
          resizeMode="cover"
          isMuted={false} // Enable sound
          volume={1.0} // Full volume (optional)
          isLooping
          shouldPlay
        />
      ) : (
        <>
          <Text
            style={[styles.heading, styles.mainHeading, { fontSize: mainFontSize }]}
          >
            ☀️ SOL Yucatán
          </Text>
          <Text style={[styles.heading, { fontSize: secondaryFontSize }]}>
            👽🔭🌌
          </Text>
          <Pressable style={styles.button} onPress={() => setShowVideo(true)}>
            <Text style={styles.buttonText}>Play</Text>
          </Pressable>
        </>
      )}
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