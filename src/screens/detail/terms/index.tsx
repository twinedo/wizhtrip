import {YStack} from 'tamagui';
import {styles} from '../styles';
import {Typography} from '@/components';

export const TermsCondition = ({terms}: {terms: string}) => {
  return (
    <YStack style={styles.semiTranslucent} rowGap={10}>
      <Typography variant="$heading-20">Terms and Condition</Typography>
      <Typography variant="$body-16">{terms}</Typography>
    </YStack>
  );
};
