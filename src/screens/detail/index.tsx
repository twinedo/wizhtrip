import {ImageBackground, Pressable, StatusBar} from 'react-native';
import React from 'react';
import {Button, ScrollView, XStack, YStack} from 'tamagui';
import Ionicons from '@react-native-vector-icons/ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';
import Animated from 'react-native-reanimated';
import {useTrips} from '@/hooks';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NavParam} from '@/navigations/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Typography} from '@/components';
import {colors} from '@/tamagui/config';
import {Button as ButtonElement} from '@react-navigation/elements';
import {styles} from './styles';
import {PricesTag} from './prices-tag';
import {Summary} from './summary';
import {Photos} from './photos';
import {Location} from './location';
import {Reviews} from './reviews';
import {TermsCondition} from './terms';

const Detail = () => {
  const route = useRoute<RouteProp<NavParam, 'Detail'>>();
  const navigation =
    useNavigation<NativeStackNavigationProp<NavParam, 'Detail'>>();
  const {id} = route.params;

  const {getTripById} = useTrips();

  const trip = getTripById(id);

  return (
    <ImageBackground
      source={{uri: trip?.photos.owner[0]}}
      style={[styles.container]}
      blurRadius={50}>
      <XStack
        justifyContent="space-between"
        position="absolute"
        alignSelf="center"
        top={20}
        width={'100%'}
        paddingHorizontal={20}
        marginTop={30}
        zIndex={1}>
        <Pressable style={styles.circleButton} onPress={navigation.goBack}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </Pressable>
        <Button
          backgroundColor={colors.white}
          height={40}
          paddingHorizontal={20}
          borderRadius={50}>
          <Typography variant="$heading-16">RSVP</Typography>
        </Button>
      </XStack>
      <ScrollView>
        <SafeAreaView style={{flex: 1}}>
          <StatusBar barStyle="dark-content" />
          <YStack flex={1} padding={20} paddingTop={70} rowGap={20}>
            <Animated.Image
              source={{uri: trip?.photos.owner[0]}}
              style={styles.image}
              resizeMode="cover"
              sharedTransitionTag="coverTrip"
            />
            <XStack style={styles.semiTranslucent}>
              <Typography variant="$heading-32" color={colors.black}>
                {trip?.title}
              </Typography>
            </XStack>
            <PricesTag
              price={trip?.price_per_pax}
              rating={trip?.rating}
              reviewCount={trip?.reviews.length}
            />
            <Summary
              summary={trip?.summary}
              duration={trip?.duration}
              pax_minimum={trip?.pax_minimum}
              pax_maximum={trip?.pax_maximum}
              includes={trip?.include}
              excludes={trip?.exclude}
            />
            <Photos
              owner={trip?.photos.owner ?? []}
              visitors={trip?.photos.visitors ?? []}
            />
            <Location location={trip?.location ?? ''} />
            <Reviews reviews={trip?.reviews ?? []} />
            <TermsCondition terms={trip?.terms_conditions.join('\n') ?? ''} />
          </YStack>
        </SafeAreaView>
      </ScrollView>
    </ImageBackground>
  );
};

export default Detail;
