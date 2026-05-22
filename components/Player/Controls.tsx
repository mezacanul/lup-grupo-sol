import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { IconSymbol } from "../ui/IconSymbol";
import { useState } from "react";

type ControlsProps = {
  isPlaying: boolean;
  onToggle: () => void;
  showControls: boolean;
  handleToggleControls: () => void;
};
export default function Controls({
  isPlaying,
  onToggle,
  showControls,
  handleToggleControls,
}: ControlsProps) {
  return (
    <View
      style={[
        styles.container,
        styles.fullAbsolute,
        { opacity: showControls ? 1 : 0 },
      ]}
    >
      <Pressable
        style={[styles.backdrop, styles.fullAbsolute]}
        onPress={handleToggleControls}
      />
      <ToggleButton
        isPlaying={isPlaying}
        onToggle={onToggle}
      />
    </View>
  );
}

function ToggleButton({
  isPlaying,
  onToggle,
}: {
  isPlaying: boolean;
  onToggle: () => void;
}) {
  return (
    <TouchableOpacity
      style={styles.toggleButton}
      onPress={onToggle}
    >
      <IconSymbol
        name={isPlaying ? "pause.fill" : "play.fill"}
        size={35}
        color="black"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  fullAbsolute: {
    position: "absolute",
    bottom: 0,
    left: 0,
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  toggleButton: {
    padding: 10,
    borderRadius: 100,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
});
