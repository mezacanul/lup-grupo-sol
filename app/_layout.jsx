import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Video } from "expo-av";

export default function RootLayout() {
  const videoRef = useRef(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [shouldPlay, setShouldPlay] = useState(true);

  const playlist = [
    // require("../assets/sol_1.mp4"),
    // require("../assets/sol_2.mp4"),
    require("../assets/sol_1.mp4"),
    require("../assets/amorino.mp4"),
    require("../assets/sol_2.mp4"),
    require("../assets/chapur.mp4"),
    require("../assets/sol_1.mp4"),
    require("../assets/jumiles.mp4"),
    require("../assets/sol_2.mp4"),
    require("../assets/lagos.mp4"),
    require("../assets/sol_1.mp4"),
    require("../assets/pg.mp4"),
    require("../assets/sol_2.mp4"),
    require("../assets/polo_norte.mov"),
    require("../assets/sol_1.mp4"),
    require("../assets/sephora.mp4"),
    require("../assets/sol_2.mp4"),
    require("../assets/steve_maden.mp4"),
    require("../assets/sol_1.mp4"),
    require("../assets/chapur_pay.mp4"),
    require("../assets/the_harbor.mp4"),
  ];

  useEffect(() => {
    // Reset playback when switching videos
    setShouldPlay(false);
    setTimeout(() => {
      setShouldPlay(true);
    }, 100);
  }, [currentVideoIndex]);

  const handlePlaybackStatusUpdate = (status) => {
    if (status.didJustFinish) {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % playlist.length);
    }
  };

  // Indices where sol_2.mp4 appears: 2, 6, 10, 14
  const resizeIndices = [2, 6, 10, 14, 17];

  return (
    <View style={styles.container}>
      <Video
        key={currentVideoIndex} // Force re-render on video change
        ref={videoRef}
        source={playlist[currentVideoIndex]}
        style={styles.video}
        resizeMode={
          resizeIndices.includes(currentVideoIndex) ? "contain" : "cover"
        }
        shouldPlay={shouldPlay}
        isMuted={false}
        volume={1.0}
        onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
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
  video: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
