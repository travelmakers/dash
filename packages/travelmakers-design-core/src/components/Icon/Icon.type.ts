import { PolymorphicComponentProps } from "@travelmakers/styles";
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
  | "IcCompanyYoutube"
  | "IcCompanyOutlineYoutube"
  | "IcCompanyOutlineKakaotalk"
  | "IcCompanyOutlineInstagram"
  | "IcCompanyOutlineFacebook"
  | "IcCompanyOutlineNaver"
  | "IcCompanyVisa"
  | "IcCompanyMasterCard"
  | "IcCompanyUnionPay"
  | "IcCompanyJCB";
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
export type IconLogoSrc = "Logo" | "LogoVertical" | "LogoVerticalWhite";
export type IconPictogramSrc =
  | "IcClock"
  | "IcDiscount"
  | "IcDocument"
  | "IcEdit"
  | "IcHotelFill"
  | "IcHotelLine"
  | "IcLogout"
  | "IcLanguage"
  | "IcMarker"
  | "IcMarkerFill"
  | "IcProfile"
  | "IcPromotion"
  | "IcSearch"
  | "IcSettings"
  | "IcTalk"
  | "IcHome"
  | "IcMembership"
  | "IcUser";

export interface SharedIconProps extends Props {}

export type IconProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  SharedIconProps
>;

type IconComponent = <C extends React.ElementType = "svg">(
  props: IconProps<C>
) => React.ReactElement;

export type ReturnType = IconComponent & {
  displayName?: string;
};
