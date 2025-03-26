import { CarouselProperties, CarouselProps } from "react-native-snap-carousel";

export type TCarouselProps = {
  listMode?: 'list' | 'stack'
  data: any
  onSnapToItem?: (index: number) => void;
}