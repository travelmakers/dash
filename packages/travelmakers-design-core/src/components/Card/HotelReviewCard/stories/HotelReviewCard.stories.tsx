import { Meta } from "@storybook/react";
import { HotelReviewCard } from "../HotelReviewCard";

export default {
  title: "@travelmakers-design-v2/core/General/Card/HotelReviewCard",
  component: HotelReviewCard,
  argTypes: {
    href: {
      defaultValue: "#",
      description:
        "HotelFeatureCard 컴포넌트를 클릭하여 이동할 경로를 설정합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    labels: {
      defaultValue: ["레이블", "레이블", "레이블"],
      description:
        "HotelFeaturedCard 컴포넌트의 이미지내 상단 레이블을 표시합니다.",
      table: {
        type: {
          summary: "array",
        },
      },
      control: { type: "array" },
    },
    contents: {
      defaultValue:
        "내년 꿈에 그리던 새아파트 입주를 앞두고 기존에 전세 계약 종료일이 다가와서 단기로 살수있을만한 곳을 이리저리 알아보게 됐습니다.가장 먼저 생각했던건 회사근처 오피스텔 월세였지만 최소1년 계약단위로만 이루어지는 계약과 부동산 복비 마지막으로 보증금을 내야한다는게 여간힘든게 아니더라구요. 호텔에 삶을 알게 된 이후",
      description: "HotelFeaturedCard 컴포넌트의 호텔명칭을 입력합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    writer: {
      defaultValue: "김OO님의 리뷰",
      description: "HotelFeaturedCard 컴포넌트의 호텔명칭을 입력합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    product: {
      defaultValue: "상품 옵션 : 한달살기",
      description: "HotelFeaturedCard 컴포넌트의 호텔명칭을 입력합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
  },
} as Meta;

export const Default = (props) => {
  return <HotelReviewCard {...props} />;
};
