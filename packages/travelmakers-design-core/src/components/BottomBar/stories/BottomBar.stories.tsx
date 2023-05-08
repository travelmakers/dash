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
import { BottomBar } from "../BottomBar";

export default {
  title: "@travelmakers/core/General/BottomBar",
  component: BottomBar,
  argTypes: {
    initSelectedId: {
      defaultValue: 0,
      description: "BottomBar의 초기 선택 값을 정합니다.",
      table: {
        type: {
          summary: "number",
        },
      },
      control: { type: "number" },
    },
    links: {
      defaultValue: [
        { name: "둘러보기", url: "/" },
        { name: "탐색", url: "/" },
        { name: "마이페이지", url: "/" },
      ],
      description: "BottomBar의 메뉴 이름 및 url을 설정합니다.",

      table: {
        type: {
          summary: "array",
        },
      },
      control: { type: "array" },
    },
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
  },
} as Meta;

export const Small = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <BottomBar {...props} />
    </div>
  );
};
