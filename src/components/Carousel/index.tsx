import {TripTypes} from '@/hooks/useTrips/types';
import {colors} from '@/tamagui/config';
import {useRef} from 'react';
import {Pressable, Image, Dimensions} from 'react-native';
import {Typography} from '../Typography';
import Carousel from 'react-native-snap-carousel';
import {TCarouselProps} from './types';
import {styles} from './styles';
import {Button, XStack, YStack} from 'tamagui';
import Ionicons from '@react-native-vector-icons/ionicons';
import {currencyFormat} from '@/utils';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavParam } from '@/navigations/types';
import Animated from 'react-native-reanimated';
import { Button as ButtonElement } from '@react-navigation/elements'

const {width} = Dimensions.get('window');

export const CarouselComponent = (props: TCarouselProps) => {
  const {data, listMode, onSnapToItem} = props;
  const navigation = useNavigation<NativeStackNavigationProp<NavParam, 'Home'>>()

  const carouselRef = useRef<Carousel<any>>(null);

  const renderItem = ({item}: {item: TripTypes}) => {
    return (
      <Pressable style={styles.card}>
        <Animated.Image
          source={{uri: item.photos.owner[0]}}
          style={styles.image}
          resizeMode="cover"
          sharedTransitionTag="coverTrip"
        />
        <Typography variant="$heading-32" color={colors.black}>
          {item.title}
        </Typography>
        <XStack justifyContent="space-between" alignItems="flex-end">
          <YStack rowGap={5} flex={1}>
            <Typography
              variant="$body-16"
              color={colors.black}
              fontStyle="italic">
              {currencyFormat(item.price_per_pax)}
            </Typography>
            <XStack columnGap={5} alignItems="center">
              <Typography variant="$body-16" color={colors.black}>
                {item.rating}
              </Typography>
              <Ionicons
                name="star"
                size={20}
                color={colors['utility-yellow-8']}
              />
            </XStack>
          </YStack>
          <ButtonElement onPress={() => navigation.navigate('Detail', {id: item.id})}>
            Info
          </ButtonElement>
        </XStack>
      </Pressable>
    );
  };

  return (
    <Carousel
      ref={carouselRef}
      data={data}
      renderItem={renderItem}
      sliderWidth={width}
      itemWidth={width * 0.8}
      layout={listMode === 'stack' ? 'stack' : 'default'}
      onSnapToItem={onSnapToItem}
    />
  );
};
