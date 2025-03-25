import {colors} from '@/tamagui/config';
import {useEffect} from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export const useAnimateSplash = () => {
  const textOpacity = useSharedValue(0);
  const imageOpacity = useSharedValue(0);
  const backgroundColor = useSharedValue(colors.theme);

  useEffect(() => {
    imageOpacity.value = withTiming(1, {duration: 2000}, () => {
      backgroundColor.value = withTiming(colors.theme, {duration: 2000});
      textOpacity.value = withTiming(1, {duration: 2000});
    });
  }, []);

  const textAnimatedStyle = useAnimatedStyle(() => ({
    opacity: textOpacity.value,
  }));

  const imageAnimatedStyle = useAnimatedStyle(() => ({
    opacity: textOpacity.value,
  }));

  const backgroundAnimatedStyle = useAnimatedStyle(() => ({
    backgroundColor: backgroundColor.value,
  }));

  return {
    textAnimatedStyle,
    imageAnimatedStyle,
    backgroundAnimatedStyle,
  };
};
