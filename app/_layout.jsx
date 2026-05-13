import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Video } from "expo-av";

export default function RootLayout() {
  // const videoRef = useRef(null);
  const [currentVideoIndex, setCurrentVideoIndex] =
    useState(0);
  const [shouldPlay, setShouldPlay] = useState(true);
  const [resizeMode, setResizeMode] = useState("cover");
  const [currentVideoURI, setCurrentVideoURI] =
    useState(null);

  useEffect(() => {
    // Reset playback when switching videos
    setShouldPlay(false);
    setTimeout(() => {
      setShouldPlay(true);
    }, 100);
  }, [currentVideoIndex]);

  const handlePlaybackStatusUpdate = (status) => {
    if (status.isPlaying && !status.didJustFinish) {
      const { uri } = status;
      if (uri !== currentVideoURI) {
        // console.log(getResizeMode(uri), uri);
        setCurrentVideoURI(uri);
        setResizeMode(getResizeMode(uri));
      }
    }
    if (status.didJustFinish) {
      const nextVideoIndex =
        (currentVideoIndex + 1) % playlist.mayo_2026.length;
      setCurrentVideoIndex(nextVideoIndex);
    }
  };

  return (
    <View style={styles.container}>
      <Video
        key={currentVideoIndex} // Force re-render on video change
        // ref={videoRef}
        source={playlist.mayo_2026[currentVideoIndex]}
        style={styles.video}
        resizeMode={resizeMode}
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

function getResizeMode(uri) {
  let resize = "cover";
  resizeContain.forEach((item) => {
    if (uri.includes(item)) {
      resize = "contain";
    }
  });
  return resize;
}

const resizeContain = ["sol_2"];

const playlist = {
  mayo_2026: [
    require("../assets/videos/sol_1.mp4"),
    require("../assets/videos/perfect_scent.mp4"),
    require("../assets/videos/sol_2.mp4"),
    require("../assets/videos/chapur_2.mp4"),
    require("../assets/videos/sol-anunciate-1.mp4"),
    require("../assets/videos/video_taiyaki.mp4"),
    require("../assets/videos/sol-anunciate-2.mp4"),
    require("../assets/videos/pg.mp4"),
    require("../assets/videos/sol_1.mp4"),
    require("../assets/videos/miniso.mp4"),
    require("../assets/videos/sol_2.mp4"),
    require("../assets/videos/crochet.mp4"),
    require("../assets/videos/sol-anunciate-1.mp4"),
    require("../assets/videos/cinepolis.mp4"),
    require("../assets/videos/sol-anunciate-2.mp4"),
    require("../assets/videos/opticas_hannia.mp4"),
    require("../assets/videos/sol_1.mp4"),
    require("../assets/videos/planet_fitness.mp4"),
    require("../assets/videos/sol_2.mp4"),
    require("../assets/videos/muebleria_kali.mp4"),
    require("../assets/videos/sol-anunciate-1.mp4"),
    require("../assets/videos/sephora_2.mp4"),
    require("../assets/videos/sol-anunciate-2.mp4"),
    require("../assets/videos/mr_sushi.mp4"),
    require("../assets/videos/sol_1.mp4"),
    require("../assets/videos/invictus_2.mp4"),
    require("../assets/videos/sol_2.mp4"),
  ],
  // agosto: [
  //     require("../assets/videos/sol_1.mp4"),
  //     require("../assets/videos/amorino.mp4"),
  //     require("../assets/videos/sol_2.mp4"),
  //     require("../assets/videos/chapur.mp4"),
  //     require("../assets/videos/sol-anunciate-1.mp4"),
  //     require("../assets/videos/jumiles.mp4"),
  //     require("../assets/videos/sol-anunciate-2.mp4"),
  //     require("../assets/videos/lagos.mp4"),
  //     require("../assets/videos/sol_1.mp4"),
  //     require("../assets/videos/pg.mp4"),
  //     require("../assets/videos/sol_2.mp4"),
  //     require("../assets/videos/polo_norte.mov"),
  //     require("../assets/videos/sol-anunciate-1.mp4"),
  //     require("../assets/videos/sephora.mp4"),
  //     require("../assets/videos/sol-anunciate-2.mp4"),
  //     require("../assets/videos/steve_maden.mp4"),
  //     require("../assets/videos/sol_1.mp4"),
  //     require("../assets/videos/chapur_pay.mp4"),
  //     require("../assets/videos/sol_2.mp4"),
  //     require("../assets/videos/the_harbor.mp4"),
  //     require("../assets/videos/sol-anunciate-1.mp4"),
  // ],
};
