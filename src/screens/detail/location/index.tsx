import {Image, YStack} from 'tamagui';
import {styles} from '../styles';
import {styles as mapStyle} from './styles';
import {Typography} from '@/components';

export const Location = ({location}: {location: string}) => {
  return (
    <YStack style={styles.semiTranslucent} rowGap={10}>
      <Typography variant="$heading-20">Location</Typography>
      <Typography variant="$heading-14">{location}</Typography>

      <Image
        source={{
          uri: 'https://sm.mashable.com/t/mashable_in/photo/default/maps_dmpu.1248.jpg',
        }}
        style={mapStyle.map}
      />
    </YStack>
  );
};
