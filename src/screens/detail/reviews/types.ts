type Review = {
  user: string;
  rating: number;
  comment: string;
}

export type ReviewsProps = {
  reviews: Review[]
}