import {XStack, YStack} from 'tamagui';
import {styles} from '../styles';
import {Typography} from '@/components';
import {FlatList} from 'react-native';
import {ReviewsProps} from './types';
import Ionicons from '@react-native-vector-icons/ionicons';
import {colors} from '@/tamagui/config';

export const Reviews = (props: ReviewsProps) => {
  const {reviews = []} = props;
  return (
    <YStack style={styles.semiTranslucent} rowGap={10}>
      <Typography variant="$heading-20">Reviews</Typography>
      <FlatList
        data={reviews.slice(0, 4)}
        keyExtractor={item => item.user}
        scrollEnabled={false}
        contentContainerStyle={{rowGap: 20}}
        renderItem={({item}) => (
          <YStack rowGap={5} style={styles.semiTranslucent}>
            <Typography variant="$heading-16">
              {item.user} |{' '}
              <Typography>
                {item.rating}
                <Ionicons name="star" color={colors['utility-yellow-8']} />
              </Typography>
            </Typography>
            <Typography variant="$body-16">{item.comment}</Typography>
          </YStack>
        )}
      />
      <XStack justifyContent="center">
        <Typography variant="$heading-14">View All Reviews</Typography>
        <Ionicons name="chevron-forward" size={20} />
      </XStack>
    </YStack>
  );
};
