import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

// here to write options from navigation
const noHeaderScreenOptions = <NativeStackNavigationOptions>(
  (() => ({ headerShown: false }))
);

export { noHeaderScreenOptions };