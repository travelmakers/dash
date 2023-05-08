import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./HotelCard";
import useStyles from "./HotelCard.style";
import { HotelType } from "../../../types/hotelType.type";

type HotelCardStylesNames = ClassNames<typeof useStyles>;

interface SharedHotelCardProps
  extends Props,
    TmComponentProps<HotelCardStylesNames> {}

export type HotelCardProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedHotelCardProps>;

export type HotelCardComponent = <C extends React.ElementType = "div">(
  props: HotelCardProps<C>
) => React.ReactElement;

export interface HotelCardType1 {
  type: "grade";
  star: number;
}
export interface HotelCardType2 {
  type: HotelType;
  star: null;
}

export type HotelCardType = HotelCardType1 | HotelCardType2;
