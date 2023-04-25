import { Meta } from "@storybook/react";
import { useId } from "../useId";

export default {
  title: "@travelmakers-design-v2/hooks/useId",
  argTypes: {
    idKey: {
      control: {
        type: "text",
      },
      description: "input,textArea등의 id를 자동 생성하기 위해 사용할 idKey.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
} as Meta;

export const Default = (props) => {
  const id = useId(props.idKey ?? "hooks");

  return <div>{id}</div>;
};
