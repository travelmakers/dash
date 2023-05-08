import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { Props } from "./HotelTitleCard";
import useStyles from "./HotelTitleCard.style";
import { HotelType } from "../../../types/hotelType.type";

type HotelTitleCardStylesNames = ClassNames<typeof useStyles>;

interface SharedHotelTitleCardProps
  extends Props,
    TmComponentProps<HotelTitleCardStylesNames> {}

export type HotelTitleCardProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedHotelTitleCardProps>;

export type HotelTitleCardComponent = <C extends React.ElementType = "div">(
  props: HotelTitleCardProps<C>
) => React.ReactElement;

export interface HotelTitleCardType1 {
  type: "grade";
  star: number;
}
export interface HotelTitleCardType2 {
  type: HotelType;
  star: null;
}

export type HotelTitleCardType = HotelTitleCardType1 | HotelTitleCardType2;
