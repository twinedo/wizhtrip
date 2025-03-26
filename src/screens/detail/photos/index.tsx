import {Image, XStack, YStack} from 'tamagui';
import {styles} from '../styles';
import {styles as imageStyle} from './styles';
import {Typography} from '@/components';
import {PhotosProps} from './types';
import {useMemo} from 'react';
import {FlatList} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';

export const Photos = (props: PhotosProps) => {
  const {owner, visitors} = props;

  const data = useMemo(() => [...owner, ...visitors], [owner, visitors]);

  return (
    <YStack style={styles.semiTranslucent} rowGap={10}>
      <Typography variant="$heading-20">Photos</Typography>
      <FlatList
        data={data.slice(0, 4)}
        keyExtractor={item => item}
        horizontal
        contentContainerStyle={{columnGap: 20}}
        renderItem={({item}) => (
          <Image source={{uri: item}} style={imageStyle.image} />
        )}
      />
      <XStack justifyContent="center">
        <Typography variant="$heading-14">View All Photos</Typography>
        <Ionicons name="chevron-forward" size={20} />
      </XStack>
    </YStack>
  );
};
