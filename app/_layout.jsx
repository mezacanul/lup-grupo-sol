import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Video } from "expo-av";

export default function RootLayout() {
    const videoRef = useRef(null);
    const [currentVideoIndex, setCurrentVideoIndex] =
        useState(0);
    const [shouldPlay, setShouldPlay] = useState(true);
    const [resizeMode, setResizeMode] = useState("cover");

    useEffect(() => {
        // Reset playback when switching videos
        setShouldPlay(false);
        setTimeout(() => {
            setShouldPlay(true);
        }, 100);
    }, [currentVideoIndex]);

    const handlePlaybackStatusUpdate = (status) => {
        if (status.didJustFinish) {
            const nextVideoIndex =
                (currentVideoIndex + 1) %
                playlist.agosto.length;
            setCurrentVideoIndex(nextVideoIndex);
            getResizeMode(nextVideoIndex);
        }
    };

    return (
        <View style={styles.container}>
            <Video
                key={currentVideoIndex} // Force re-render on video change
                ref={videoRef}
                source={playlist.agosto[currentVideoIndex]}
                style={styles.video}
                resizeMode={resizeMode}
                shouldPlay={shouldPlay}
                isMuted={false}
                volume={1.0}
                onPlaybackStatusUpdate={
                    handlePlaybackStatusUpdate
                }
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

function getResizeMode(videoIndex) {
    // for (const video of resizeContain) {
    console.log(playlist.agosto[videoIndex]);
    //  playlist.agosto[videoIndex];
    // }
}

const resizeContain = ["sol_2"];

const playlist = {
    agosto: [
        require("../assets/videos/sol_1.mp4"),
        require("../assets/videos/amorino.mp4"),
        require("../assets/videos/sol_2.mp4"),
        require("../assets/videos/chapur.mp4"),
        require("../assets/videos/sol-anunciate-1.mp4"),
        require("../assets/videos/jumiles.mp4"),
        require("../assets/videos/sol-anunciate-2.mp4"),
        require("../assets/videos/lagos.mp4"),
        require("../assets/videos/sol_1.mp4"),
        require("../assets/videos/pg.mp4"),
        require("../assets/videos/sol_2.mp4"),
        require("../assets/videos/polo_norte.mov"),
        require("../assets/videos/sol-anunciate-1.mp4"),
        require("../assets/videos/sephora.mp4"),
        require("../assets/videos/sol-anunciate-2.mp4"),
        require("../assets/videos/steve_maden.mp4"),
        require("../assets/videos/sol_1.mp4"),
        require("../assets/videos/chapur_pay.mp4"),
        require("../assets/videos/sol_2.mp4"),
        require("../assets/videos/the_harbor.mp4"),
        require("../assets/videos/sol-anunciate-1.mp4"),
    ],
};
