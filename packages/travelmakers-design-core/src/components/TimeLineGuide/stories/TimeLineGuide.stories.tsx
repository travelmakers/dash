import {
  ArgsTable,
  Description,
  PRIMARY_STORY,
  Primary,
  Stories,
  Subtitle,
  Title,
} from "@storybook/addon-docs";
import { Meta } from "@storybook/react";
import React from "react";
import { TimeLineGuide } from "../TimeLineGuide";

export default {
  title: "@travelmakers-design/core/Component/TimeLineGuide",
  component: TimeLineGuide,
  argTypes: {
    hotelName: {
      defaultValue: "서울 드래곤 시티",
      description: "해당 호텔의 이름을 표시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    hotelImage: {
      defaultValue: "https://picsum.photos/60/40",
      description: "해당 호텔의 이미지를 표시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    caption: {
      defaultValue: "To do 추천",
      description: "호텔의 이름뒤에 문구를 표시합니다.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: { type: "text" },
    },
    onClick: { action: "clicked" },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
    actions: {
      handles: ["click"],
    },
  },
} as Meta;

export const Default = (props) => {
  return (
    <div style={{ padding: 24 }}>
      <TimeLineGuide {...props} />
    </div>
  );
};
