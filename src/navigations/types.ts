import {Detail, Home, SplashScreen} from '@/screens';
import {noHeaderScreenOptions} from './screen-options';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

export type NavParam = {
  SplashScreen: undefined;
  Home: undefined;
  Detail: {id: number};
};

type StackParamsKey = keyof Partial<NavParam>;

export type StackScreenType = {
  component: React.ComponentType<any>;
  name: StackParamsKey;
  options?: NativeStackNavigationOptions;
};

export const screens: StackScreenType[] = [
  {
    component: SplashScreen,
    name: 'SplashScreen',
    options: noHeaderScreenOptions,
  },
  {
    component: Home,
    name: 'Home',
    options: noHeaderScreenOptions,
  },
  {
    component: Detail,
    name: 'Detail',
    options: noHeaderScreenOptions,
  },
];
