import { Meta } from "@storybook/react";
import { useRef } from "react";
import { useArrowMove } from "../useArrowMove";

export default {
  title: "@travelmakers/hooks/useArrowMove",
} as Meta;

export const Default = (props) => {
  const contentRef = useRef([]);
  const divElement = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const { page, arrowLeftClickHandler, arrowRightClickHandler } = useArrowMove(
    contentRef,
    divElement.length - 1
  );

  return (
    <>
      <div onClick={arrowLeftClickHandler}>⬅</div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          overflow: "hidden",
          gap: "20px",
        }}
      >
        {divElement.map((element, index) => (
          <div ref={(el) => (contentRef.current[index] = el)}>
            element{element}
          </div>
        ))}
      </div>
      page:{page}
      <div onClick={arrowRightClickHandler}>➡</div>
    </>
  );
};
