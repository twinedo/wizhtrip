import {menu} from '@/utils';
import {useState} from 'react';
import {Button, XStack} from 'tamagui';
import {Typography} from '../Typography';
import {colors} from '@/tamagui/config';

export const MenuHome = () => {
  const [selectedMenu, setSelectedMenu] = useState({
    id: '1',
    text: 'Semua',
  });
  return (
    <XStack columnGap={10} rowGap={10} flexWrap="wrap">
      {menu.map(item => (
        <Button
          key={item.id}
          borderWidth={1}
          borderColor={selectedMenu.id === item.id ? 'blue' : 'gray'}
          onPress={() => setSelectedMenu(item)}
          height={30}
          backgroundColor={colors.white}
          borderRadius={50}
          paddingHorizontal={30}
          elevation={2}>
          <Typography color={selectedMenu.id === item.id ? 'blue' : 'black'}>{item.text}</Typography>
        </Button>
      ))}
    </XStack>
  );
};
