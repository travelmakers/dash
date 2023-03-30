import * as React from "react";
import { SVGProps } from "react";

const SvgIcAngleDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    {...props}
  >
    <path
      d="m30.491 8.944-1.414-1.415L16.35 21.672 3.621 7.529 2.207 8.944 16.35 24.5 30.491 8.944Z"
      fill={props.color ?? "#30373F"}
    />
  </svg>
);
export default SvgIcAngleDown;
