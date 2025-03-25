import { Typography } from "@/components";
import { colors } from "@/tamagui/config";
import { YStack } from "tamagui";
import { styles } from "./styles";

export const HomeHeader = () => {
  return (
    <YStack style={styles.header}>
      <Typography variant="$heading-48" color={colors.white}>
        WIZH
      </Typography>
      <Typography
        variant="$body-14"
        color={colors.white}
        backgroundColor={colors['theme']}
        textAlign="center"
        paddingVertical={4}>
        Let's Trip
      </Typography>
    </YStack>
  );
};
