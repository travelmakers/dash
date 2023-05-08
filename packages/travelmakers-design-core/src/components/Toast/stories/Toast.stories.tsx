import { Meta } from "@storybook/react";
import { toast } from "react-hot-toast";
import { Toast } from "../Toast";
import { Toaster } from "../Toaster";

export default {
  title: "@travelmakers/core/General/Toast",
  argTypes: {},
} as Meta;

export const Default = () => {
  const onClick = () => toast(<Toast text={"문구를 입력하세요."} />);
  const onSuccess = () => toast(<Toast text={"성공"} type={"success"} />);
  const onError = () => toast(<Toast text={"실패"} type={"error"} />);

  return (
    <>
      <Toaster />
      <button onClick={onClick}>클릭</button>
      <button onClick={onSuccess}>Success</button>
      <button onClick={onError}>Error</button>
    </>
  );
};
