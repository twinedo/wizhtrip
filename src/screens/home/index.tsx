import {
  ActivityIndicator,
  ImageBackground,
  Pressable,
  StyleSheet,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import {useTrips} from '@/hooks/useTrips';
import {images} from '@/assets/images';
import {CarouselComponent, Typography} from '@/components';
import {colors} from '@/tamagui/config';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, XStack, YStack} from 'tamagui';
import Ionicons from '@react-native-vector-icons/ionicons';
import {MenuHome} from '@/components/MenuHome';
import { HomeHeader } from './components/header';

const Home = () => {
  const {trips, isFetching} = useTrips();

  const [listMode, setListMode] = useState<'list' | 'stack'>('list');
  const [carouselCurrentIndex, setCarouselCurrentIndex] = useState(0)

  const imageSource = useMemo(() => {
    if (trips.length > 0) {
      return {uri: trips[carouselCurrentIndex].photos.owner[0]};
    } else {
      return images.logo;
    }
  }, [trips, carouselCurrentIndex]);

  return (
    <ImageBackground
      source={imageSource}
      style={[styles.container]}
      blurRadius={30}
      imageStyle={{backgroundColor: colors.black, opacity: 0.6}}>
      <SafeAreaView edges={['top', 'bottom']} style={[styles.container]}>
        <ScrollView contentContainerStyle={{flex: 1}}>
          <HomeHeader />
          <YStack flex={1} rowGap={20} padding="$spacing-md">
            <XStack
              rowGap={10}
              alignItems="center"
              justifyContent="space-between">
              <Typography variant="$heading-20" color={colors.white}>
                Trips
              </Typography>
              {listMode === 'list' && (
                <Pressable onPress={() => setListMode('stack')}>
                  <Ionicons
                    name="list-circle-outline"
                    size={24}
                    color={colors.white}
                  />
                </Pressable>
              )}
              {listMode === 'stack' && (
                <Pressable onPress={() => setListMode('list')}>
                  <Ionicons
                    name="file-tray-stacked-sharp"
                    size={24}
                    color={colors.white}
                  />
                </Pressable>
              )}
            </XStack>
            {isFetching && <ActivityIndicator size="large" />}
            <CarouselComponent data={trips} listMode={listMode} onSnapToItem={setCarouselCurrentIndex} />
            <Typography variant="$heading-20" color={colors.white}>
              Your Needs
            </Typography>
            <MenuHome />
          </YStack>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
