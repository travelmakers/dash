import { Meta } from "@storybook/react";
import { HotelFeaturedCard } from "../HotelFeaturedCard";

export default {
  title: "@travelmakers-design-v2/core/General/Card/HotelFeaturedCard",
  component: HotelFeaturedCard,
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
    type: {
      defaultValue: "grade",
      description: "Hotel 타입을 정합니다.",
      options: ["grade", "minihotel", "residence"],
      control: { type: "inline-radio" },
    },
    star: {
      defaultValue: 5,
      description:
        "HotelFeatureCard 컴포넌트의 호텔타입이 default일 경우 몇성호텔인지를 표시합니다.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    src: {
      defaultValue: "https://picsum.photos/600/400",
      description: "이미지 src를 정합니다.",
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
    name: {
      defaultValue: "호텔명",
      description: "HotelFeaturedCard 컴포넌트의 호텔명칭을 입력합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    timelineTags: {
      defaultValue: ["레이블", "레이블", "레이블"],
      description:
        "HotelFeaturedCard 컴포넌트의 이미지 하단 레이블을 표시합니다.",
      table: {
        type: {
          summary: "array",
        },
      },
      control: { type: "array" },
    },
    price: {
      defaultValue: {
        type: "primary",
        label: "",
        percentText: 70,
        nightText: 1,
        priceText: 10000,
        priceStartText: "1박 100,000원부터",
        isCoupon: true,
      },
      description: "HotelFeaturedCard 컴포넌트의 가격을 표시합니다.",
      table: {
        type: {
          summary: "object",
        },
      },
      control: { type: "object" },
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div style={{ margin: 50 }}>
      <HotelFeaturedCard {...props} />
    </div>
  );
};
