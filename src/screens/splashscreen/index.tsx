import {images} from '@/assets/images';
import { colors } from '@/tamagui/config';
import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {YStack} from 'tamagui';

const SplashScreen = () => {
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

  return (
    <Animated.View style={[styles.container, backgroundAnimatedStyle]}>
      <YStack rowGap={10} alignItems="center">
        <Animated.Image
          source={images.logo}
          width={100}
          height={100}
          style={[imageAnimatedStyle]}
        />
        <Animated.Text style={[styles.text, textAnimatedStyle]}>
          WIZH
        </Animated.Text>
      </YStack>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 60,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default SplashScreen;
