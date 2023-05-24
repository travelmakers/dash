import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { HotelType } from "../../../types/hotelType.type";
import { Props } from "./HotelCard";
import useStyles from "./HotelCard.style";

type HotelCardStylesNames = ClassNames<typeof useStyles>;

interface SharedHotelCardProps
  extends Props,
    TmComponentProps<HotelCardStylesNames> {}

export type HotelCardProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedHotelCardProps>;

type HotelCardComponent = <C extends React.ElementType = "div">(
  props: HotelCardProps<C>
) => React.ReactElement;

export interface HotelCardType1 {
  type: "hotel";
  star: number;
}
export interface HotelCardType2 {
  type: HotelType;
  star: null;
}

export type HotelCardType = HotelCardType1 | HotelCardType2;

export type ReturnType = HotelCardComponent & {
  displayName?: string;
};
