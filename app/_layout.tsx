import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useEffect } from 'react';

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <Text style={[styles.heading, styles.mainHeading]}>☀️ SOL Yucatán</Text>
      <Text style={styles.heading}>👽🔭🌌</Text>
      {/* <Text style={styles.heading}>SOL Yucatán ☀️</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    paddingVertical: '5vh', // Padding on the y-axis (5% of viewport height)
  },
  heading: {
    fontSize: 16,
    fontWeight: '300',
    color: "white"
  },
  mainHeading: {
    marginBottom: "15",
    fontSize: 33,
  }
});