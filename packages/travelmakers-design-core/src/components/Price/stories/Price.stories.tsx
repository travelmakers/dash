import React from "react";
import { Price } from "../Price";

export default {
  title: "@travelmakers/core/General/Price",
  component: Price,
  argTypes: {
    type: {
      defaultValue: "primary",
      description: "Price 컴포넌트의 타입을 정합니다.",
      options: ["primary", "secondary", "tertiary"],
      control: { type: "inline-radio" },
    },
    size: {
      defaultValue: "medium",
      description: "Price 컴포넌트의 size를 정합니다.",
      options: ["small", "medium"],
      control: { type: "inline-radio" },
    },
    label: {
      defaultValue: "",
      description: "(secondary type 한정)Price 컴포넌트의 레이블을 표시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    percentText: {
      defaultValue: 70,
      description: "Price 컴포넌트의 할인율을 표시합니다.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    priceText: {
      defaultValue: 10000,
      description: "Price 컴포넌트의 가격을 표시합니다.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    priceStartText: {
      defaultValue: "1박 100,000원부터",
      description: "Price 컴포넌트의 시작가격을 표시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    isCoupon: {
      defaultValue: true,
      description:
        " (secondary type 한정) Price 컴포넌트의 쿠폰 표시여부를 결정합니다.",
      table: {
        type: {
          summary: "boolean",
        },
      },
      control: { type: "boolean" },
    },
  },
};

export const Default = (props) => {
  return <Price {...props} />;
};

export const English = (props) => {
  return <Price {...props} locale={"en"} />;
};
