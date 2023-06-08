import {
  ClassNames,
  PolymorphicComponentProps,
  TmComponentProps,
} from "@travelmakers/styles";
import { HotelType } from "../../../types/hotelType.type";
import { Props } from "./HotelTitleCard";
import useStyles from "./HotelTitleCard.style";
import { Price, PriceProps } from "../../Price";

type HotelTitleCardStylesNames = ClassNames<typeof useStyles>;

interface SharedHotelTitleCardProps
  extends Props,
    TmComponentProps<HotelTitleCardStylesNames> {}

export type HotelTitleCardProps<C extends React.ElementType> =
  PolymorphicComponentProps<C, SharedHotelTitleCardProps>;

type HotelTitleCardComponent = <C extends React.ElementType = "div">(
  props: HotelTitleCardProps<C>
) => React.ReactElement;

export interface HotelTitleCardType1 {
  type: "hotel";
  star: number;
}
export interface HotelTitleCardType2 {
  type: HotelType;
  star: null;
}

export type HotelTitleCardType = HotelTitleCardType1 | HotelTitleCardType2;

export interface HotelTitlePrice extends PriceProps<typeof Price> {
  secondaryPriceText?: number;
  secondaryDisabled?: boolean;
}

export type ReturnType = HotelTitleCardComponent & {
  displayName?: string;
};
