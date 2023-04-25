import { PolymorphicComponentProps } from "@travelmakers-design-v2/styles";
import { Props } from "./Icon";

export type IconTypes =
  | IconCompanySrc
  | IconControlSrc
  | IconLogoSrc
  | IconPictogramSrc;

export type IconCompanySrc =
  | "IcCompanyInstagram"
  | "IcCompanyApple"
  | "IcCompanyBrunch"
  | "IcCompanyFacebook"
  | "IcCompanyGoogle"
  | "IcCompanyKakaoPay"
  | "IcCompanyKakao"
  | "IcCompanyLivinginhotel"
  | "IcCompanyNaverPay"
  | "IcCompanyNaver"
  | "IcCompanySamsungPay"
  | "IcCompanyYoutube";
export type IconControlSrc =
  | "IcAlert"
  | "IcAngleDown"
  | "IcAngleLeft"
  | "IcAngleRight"
  | "IcAngleUp"
  | "IcArrowLeft"
  | "IcArrowRight"
  | "IcArrowSingleLeft"
  | "IcArrowSingleRight"
  | "IcCheck"
  | "IcClose"
  | "IcExpand"
  | "IcHotelTypeMini"
  | "IcHotelTypeResidence"
  | "IcMinus"
  | "IcPlus"
  | "IcReset"
  | "IcResultFail"
  | "IcResultSuccess"
  | "IcStar";
export type IconLogoSrc = "Logo";
export type IconPictogramSrc =
  | "IcClock"
  | "IcDiscount"
  | "IcDocument"
  | "IcEdit"
  | "IcHotelFill"
  | "IcHotelLine"
  | "IcLogout"
  | "IcMarker"
  | "IcProfile"
  | "IcSearch"
  | "IcSettings"
  | "IcTalk";

export interface SharedIconProps extends Props {}

export type IconProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  SharedIconProps
>;

export type IconComponent = <C extends React.ElementType = "svg">(
  props: IconProps<C>
) => React.ReactElement;