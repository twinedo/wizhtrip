import {Typography} from '@/components';
import {XStack, YStack} from 'tamagui';
import {styles} from '../styles';
import { SummaryProps } from './types';

export const Summary = (props: SummaryProps) => {
  const {summary, duration, pax_maximum, pax_minimum, includes, excludes} = props;
  return (
    <YStack style={styles.semiTranslucent} rowGap={5}>
      <Typography variant="$heading-20">Summary</Typography>
      <Typography variant="$body-16">{summary}</Typography>
      <YStack rowGap={5}>
        <XStack>
          <Typography flex={0.5} variant="$body-16">Duration</Typography>
          <Typography flex={1} variant="$body-16">: {duration}</Typography>
        </XStack>
        <XStack>
          <Typography flex={0.5} variant="$body-16">Pax Minimum</Typography>
          <Typography flex={1} variant="$body-16">: {pax_minimum}</Typography>
        </XStack>
        <XStack>
          <Typography flex={0.5} variant="$body-16">Pax Maximum</Typography>
          <Typography flex={1} variant="$body-16">: {pax_maximum}</Typography>
        </XStack>
        <XStack>
          <Typography flex={0.5} variant="$body-16">Includes</Typography>
          <Typography flex={1} variant="$body-16">: {includes?.join(', \n')}</Typography>
        </XStack>
        <XStack>
          <Typography flex={0.5} variant="$body-16">Excludes</Typography>
          <Typography flex={1} variant="$body-16">: {excludes?.join(', \n')}</Typography>
        </XStack>
      </YStack>
    </YStack>
  );
};
