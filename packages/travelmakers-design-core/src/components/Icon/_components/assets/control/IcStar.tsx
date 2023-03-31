import * as React from "react";
import { SVGProps } from "react";

const SvgIcStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m8 12.23-4.702 2.242.678-5.165-3.584-3.78 5.121-.95L8 0l2.487 4.577 5.121.95-3.584 3.78.678 5.165L8 12.231Z"
      fill={props.color ?? "#979B9F"}
    />
  </svg>
);
export default SvgIcStar;
