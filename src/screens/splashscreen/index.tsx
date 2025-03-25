import {images} from '@/assets/images';
import { useAnimateSplash } from '@/hooks/useAnimateSplash';
import { NavParam } from '@/navigations/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import Animated  from 'react-native-reanimated';
import {YStack} from 'tamagui';

const SplashScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<NavParam, 'SplashScreen'>>();
  const {textAnimatedStyle, backgroundAnimatedStyle, imageAnimatedStyle} = useAnimateSplash()

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);
  }, [])
  
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
