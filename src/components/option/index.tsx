import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { useEffect } from "react";
import { Pressable, PressableProps, Text } from "react-native";
import Animated, { Extrapolation, interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

type OptionProps = PressableProps & {
  title: string;
  icon: keyof typeof Feather.glyphMap;
  isSelected: boolean;
};

const AnimetedPressable = Animated.createAnimatedComponent(Pressable);

export function Option({ title, icon, isSelected, ...rest }: OptionProps) {
  const animationStatus = useSharedValue(0);

  const animatedPressableStyle = useAnimatedStyle(() => ({
    width: interpolate(animationStatus.value, [0, 1], [42, 144], Extrapolation.CLAMP)
  }));

  const animetedTitleStyle = useAnimatedStyle(() => ({
    opacity: animationStatus.value
  }));

  useEffect(() => {
    animationStatus.value = withTiming(isSelected ? 1 : 0);
  }, [isSelected]);

  return (
    <AnimetedPressable style={[styles.container, animatedPressableStyle]} {...rest}>
      <Feather name={icon} size={18} />
      <Animated.Text style={[styles.title, animetedTitleStyle]}>{title}</Animated.Text>
    </AnimetedPressable>
  )
};