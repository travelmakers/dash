import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers-design-v2/styles";
import { Props } from "./HotelFeaturedCard";
import useStyles from "./HotelFeaturedCard.style";
import { HotelType } from "../../../types/hotelType.type";

type HotelFeaturedCardStylesNames = ClassNames<typeof useStyles>;

interface SharedHotelFeaturedCardProps
  extends Props,
    TmComponentProps<HotelFeaturedCardStylesNames> {}

export type HotelFeaturedCardProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedHotelFeaturedCardProps>;

export type HotelFeaturedCardComponent = <C extends React.ElementType = "div">(
  props: HotelFeaturedCardProps<C>
) => React.ReactElement;

export interface HotelFeatureType1 {
  type: "grade";
  star: number;
}
export interface HotelFeatureType2 {
  type: HotelType;
  star: null;
}

export type HotelFeatureType = HotelFeatureType1 | HotelFeatureType2;
