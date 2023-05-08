import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./HotelReviewCard";
import useStyles from "./HotelReviewCard.style";

type HotelReviewCardStylesNames = ClassNames<typeof useStyles>;

interface SharedHotelReviewCardProps
  extends Props,
    TmComponentProps<HotelReviewCardStylesNames> {}

export type HotelReviewCardProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedHotelReviewCardProps>;

export type HotelReviewCardComponent = <C extends React.ElementType = "div">(
  props: HotelReviewCardProps<C>
) => React.ReactElement;
