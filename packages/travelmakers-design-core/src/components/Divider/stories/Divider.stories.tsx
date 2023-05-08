import { Meta } from "@storybook/react";
import { Divider } from "../Divider";

export default {
  title: "@travelmakers/core/General/Divider",
  component: Divider,
  argTypes: {
    type: {
      control: {
        type: "radio",
        options: ["horizontal", "vertical"],
      },
      description: "Divider 방향",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    width: {
      control: {
        type: "text",
      },
      description: "Divider 가로 길이",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    height: {
      control: {
        type: "text",
      },
      description: "Divider 세로 길이",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    color: {
      control: {
        type: "text",
      },
      defaultValue: "primary3",
      description: "TmColor의 토큰 값",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Horizontal = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "50px",
        height: "50px",
      }}
    >
      <Divider {...props} type={"horizontal"} />
    </div>
  );
};

export const Vertical = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "50px",
        height: "50px",
      }}
    >
      <Divider {...props} type={"vertical"} />
    </div>
  );
};
