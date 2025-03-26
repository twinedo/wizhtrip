export type TripTypes = {
  id: number;
  title: string;
  summary: string;
  location: string;
  price_per_pax: number;
  currency: string;
  photos: {
    owner: string[];
    visitors: string[];
  };
  rating: number;
  reviews: {
    user: string;
    rating: number;
    comment: string;
  }[];
  include: string[];
  exclude: string[];
  terms_conditions: string[];
  duration: string;
  pax_minimum: number;
  pax_maximum: number;
  tag: string;
};
