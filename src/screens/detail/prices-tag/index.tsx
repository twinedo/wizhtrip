import {Typography} from '@/components';
import {colors} from '@/tamagui/config';
import {currencyFormat} from '@/utils';
import React from 'react';
import {Pressable} from 'react-native';
import {XStack, YStack} from 'tamagui';
import {PricesTagProps} from './types';
import Ionicons from '@react-native-vector-icons/ionicons';
import {styles} from '../styles';

export const PricesTag = (props: PricesTagProps) => {
  const {price, rating, reviewCount} = props;
  return (
    <XStack
      justifyContent="space-between"
      alignItems="center"
      style={styles.semiTranslucent}>
      <YStack rowGap={5}>
        <Typography
          variant="$heading-20"
          color={colors.black}
          fontWeight="700"
          fontStyle="italic">
          {currencyFormat(price ?? 0)}
        </Typography>
        <XStack columnGap={5} alignItems="center">
          <Typography variant="$body-16" color={colors.black}>
            {rating}
          </Typography>
          <Ionicons name="star" size={20} color={colors['utility-yellow-8']} />
          <Typography variant="$body-12" color={colors.black}>
            ({reviewCount} reviews)
          </Typography>
        </XStack>
      </YStack>
      <XStack columnGap={10}>
        <Pressable
          style={[styles.circleButton, {backgroundColor: '#FFFFFF50'}]}>
          <Ionicons name="pin" size={20} color="black" />
        </Pressable>
        <Pressable
          style={[styles.circleButton, {backgroundColor: '#FFFFFF50'}]}>
          <Ionicons name="bus" size={20} color="black" />
        </Pressable>
        <Pressable
          style={[styles.circleButton, {backgroundColor: '#FFFFFF50'}]}>
          <Ionicons name="chatbox" size={20} color="black" />
        </Pressable>
      </XStack>
    </XStack>
  );
};
