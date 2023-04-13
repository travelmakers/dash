import { Meta } from "@storybook/react";
import { Toaster } from "react-hot-toast";
import { useToast } from "../useToast";

export default {
  title: "@travelmakers-design-v2/hooks/useToast",
} as Meta;

export const Toast = () => {
  const { toast, success, error } = useToast();

  return (
    <>
      <div style={{ display: "flex", gap: "4px" }}>
        <button onClick={() => toast({ text: "기본 테스트" })}>Toast</button>
        <button onClick={() => success({ text: "성공" })}>Success</button>
        <button onClick={() => error({ text: "실패" })}>Error</button>
      </div>
      <Toaster />
    </>
  );
};
