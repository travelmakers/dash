import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { HotelType } from "../../../types/hotelType.type";
import { Props } from "./HotelFeaturedCard";
import useStyles from "./HotelFeaturedCard.style";

type HotelFeaturedCardStylesNames = ClassNames<typeof useStyles>;

interface SharedHotelFeaturedCardProps
  extends Props,
    TmComponentProps<HotelFeaturedCardStylesNames> {}

export type HotelFeaturedCardProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedHotelFeaturedCardProps>;

type HotelFeaturedCardComponent = <C extends React.ElementType = "div">(
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

export type ReturnType = HotelFeaturedCardComponent & {
  displayName?: string;
};
