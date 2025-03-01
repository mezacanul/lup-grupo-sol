import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

export default function RootLayout() {
  // Get the screen height for scaling
  const { height } = Dimensions.get("window");
  const mainFontSize = height * 0.04; // 5% of screen height for main heading
  const secondaryFontSize = height * 0.02; // 2.5% of screen height for secondary text

  return (
    <View style={styles.container}>
      <Text
        style={[styles.heading, styles.mainHeading, { fontSize: mainFontSize }]}
      >
        ☀️ SOL Yucatán
      </Text>
      <Text style={[styles.heading, { fontSize: secondaryFontSize }]}>
        👽🔭🌌
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Align to top instead of center
    alignItems: "center", // Center horizontally
    backgroundColor: "black", // Ensure background is black for white text visibility
  },
  heading: {
    fontWeight: "300",
    color: "white",
  },
  mainHeading: {
    marginBottom: 15, // Keep the margin as a number (not a string)
  },
});
