import { Meta } from "@storybook/react";
import { Icon } from "../Icon";

export default {
  title: "@travelmakers/core/General/Icon",
  component: Icon,
  argTypes: {
    src: {
      defaultValue: "IcCompanyApple",
      control: {
        type: "radio",
        options: [
          "======company======",
          "IcCompanyInstagram",
          "IcCompanyApple",
          "IcCompanyBrunch",
          "IcCompanyFacebook",
          "IcCompanyGoogle",
          "IcCompanyGoogleGray",
          "IcCompanyKakaoPay",
          "IcCompanyKakao",
          "IcCompanyLivinginhotel",
          "IcCompanyNaverPay",
          "IcCompanyNaver",
          "IcCompanySamsungPay",
          "IcCompanyYoutube",
          "IcCompanyOutlineYoutube",
          "IcCompanyOutlineKakaotalk",
          "IcCompanyOutlineInstagram",
          "IcCompanyOutlineFacebook",
          "IcCompanyOutlineNaver",

          "======control======",
          "IcAlert",
          "IcAngleDown",
          "IcAngleLeft",
          "IcAngleRight",
          "IcAngleUp",
          "IcArrowLeft",
          "IcArrowRight",
          "IcArrowSingleLeft",
          "IcArrowSingleRight",
          "IcCheck",
          "IcClose",
          "IcExpand",
          "IcHotelTypeMini",
          "IcHotelTypeResidence",
          "IcMinus",
          "IcPlus",
          "IcReset",
          "IcResultFail",
          "IcResultSuccess",
          "IcStar",

          "======logo======",
          "Logo",
          "LogoVertical",

          "======pictogram======",
          "IcClock",
          "IcDiscount",
          "IcDocument",
          "IcEdit",
          "IcHotelFill",
          "IcHotelLine",
          "IcLogout",
          "IcMarker",
          "IcMarkerFill",
          "IcProfile",
          "IcSearch",
          "IcSettings",
          "IcTalk",
          "IcHome",
          "IcMembership",
          "IcUser",
        ],
      },
      description: "Icon타입에 따른 컴포넌트 이름을 정합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  return <Icon {...props} width={32} height={32} />;
};
