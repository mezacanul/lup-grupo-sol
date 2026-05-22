import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import { VideoView, useVideoPlayer } from "expo-video";
import Controls from "@/components/Player/Controls";

export default function RootLayout() {
  const [showControls, setShowControls] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] =
    useState(0);

  const handleToggleControls = () => {
    setShowControls((prev) => !prev);
  };

  const currentSource =
    playlist.mayo_2026[currentVideoIndex];

  const player = useVideoPlayer(currentSource, (player) => {
    // player.playbackRate = 2;
    // player.preservesPitch = false;
    player.loop = false;
    player.volume = 1.0;
    player.play();
  });

  // Handle when video ends → go to next
  useEffect(() => {
    const subscription = player.addListener(
      "playToEnd",
      () => {
        setCurrentVideoIndex((prevIndex) => {
          const newIndex =
            (prevIndex + 1) % playlist.mayo_2026.length;
          console.log("new index", newIndex);

          return newIndex === 0 ? 0 : newIndex;
        });
      }
    );

    const subscription2 = player.addListener(
      "playingChange",
      (playerState) => {
        // console.log("playerState", playerState.isPlaying);
        setIsPlaying(playerState.isPlaying);
      }
    );

    return () => {
      subscription.remove();
      subscription2.remove();
    };
  }, [player, currentVideoIndex]);

  // Force restart when video index changes
  useEffect(() => {
    if (player) {
      player.replaceAsync(currentSource); // Important: replace source
      player.play();
    }
  }, [currentVideoIndex, player]);

  // Calculate resize mode
  const contentFit = resizeContain.some((item) =>
    String(currentSource).includes(item)
  )
    ? "contain"
    : "cover";

  useEffect(() => {
    console.log("player.isPlaying", player.isPlaying);
  }, [player.isPlaying]);

  const [isPlaying, setIsPlaying] = useState(true);
  const handleToggle = () => {
    setIsPlaying((prev) => {
      const newState = !prev;
      console.log("new state", newState);
      return newState;
    });
    if (isPlaying) {
      player.pause();
    } else {
      player.play();
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleToggleControls}>
        <VideoView
          player={player}
          style={styles.video}
          contentFit={contentFit}
          allowsPictureInPicture
          allowsFullscreen
          nativeControls={false}
        />
      </Pressable>
      <Controls
        isPlaying={isPlaying}
        onToggle={handleToggle}
        showControls={showControls}
        handleToggleControls={handleToggleControls}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    position: "relative",
  },
  video: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

const resizeContain = ["sol_2"];

const playlist = {
  mayo_2026: [
    require("../assets/videos/sol_1.mp4"),
    require("../assets/videos/perfect_scent.mp4"),
    require("../assets/videos/sol_2.mp4"),
    require("../assets/videos/chapur_2.mp4"),
    require("../assets/videos/sol-anunciate-1.mp4"),
    require("../assets/videos/carla_osorio.mp4"),
    require("../assets/videos/sol_2.mp4"),
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
};
