interface IconCompanyProps {
  type: "company";
  src: IconCompanySrc;
}
interface IconControlProps {
  type: "control";
  src: IconControlSrc;
}
interface IconLogoProps {
  type: "logo";
  src: IconLogoSrc;
}
interface IconPictogramProps {
  type: "pictogram";
  src: IconPictogramSrc;
}

export type IconTypes =
  | IconCompanyProps
  | IconControlProps
  | IconLogoProps
  | IconPictogramProps;

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
