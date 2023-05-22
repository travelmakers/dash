import { Meta } from "@storybook/react";
import { HotelCard } from "../HotelCard";

export default {
  title: "@travelmakers/core/General/Card/HotelCard",
  component: HotelCard,
  argTypes: {
    href: {
      defaultValue: "#",
      description: "HotelCard 컴포넌트를 클릭하여 이동할 경로를 설정합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    name: {
      defaultValue: "서울 드래곤 시티 - 이비스 스타일 앰배서더 서울 용산",
      description: "HotelCard 컴포넌트의 호텔명을 표시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    description: {
      defaultValue: "제주 서귀포 공항 차량 10분 거리",
      description: "HotelCard 컴포넌트의 자세한 설명을 표시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    src: {
      defaultValue: "https://picsum.photos/600/400",
      description: "HotelCard 컴포넌트의 이미지를 표시합니다.",
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
    price: {
      defaultValue: [
        {
          status: "active",
          name: "name",
          description: "description",
          tag: ["레이블", "레이블", "레이블"],
        },
        {
          status: "active",
          name: "name",
          description: "description",
          tag: ["레이블", "레이블", "레이블"],
        },
        {
          status: "active",
          name: "name",
          description: "description",
          tag: ["레이블", "레이블", "레이블"],
        },
        {
          status: "active",
          name: "name",
          description: "description",
          tag: ["레이블", "레이블", "레이블"],
        },
        {
          status: "active",
          name: "name",
          description: "description",
          tag: ["레이블", "레이블", "레이블"],
        },
        {
          status: "active",
          name: "name",
          description: "description",
          tag: ["레이블", "레이블", "레이블"],
        },
        {
          status: "active",
          name: "name",
          description: "description",
          tag: ["레이블", "레이블", "레이블"],
        },
      ],
      description: "HotelCard 컴포넌트의 레이블을 표시합니다.",
      table: {
        type: {
          summary: "object",
        },
      },
      control: { type: "object" },
    },
    isCoupon: {
      defaultValue: true,
      description: "HotelCard 컴포넌트의 쿠폰 표시여부를 결정합니다.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
    disabled: {
      defaultValue: false,
      description: "true일 경우 HotelCard 컴포넌트가 disabled 됩니다.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
  },
} as Meta;

export const Default = (props) => {
  return <HotelCard {...props} />;
};
