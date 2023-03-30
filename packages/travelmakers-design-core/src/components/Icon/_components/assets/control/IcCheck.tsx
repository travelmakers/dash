import * as React from "react";
import { SVGProps } from "react";

const SvgIcCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    {...props}
  >
    <path
      d="M2 6.768 6.12 12 14 4"
      stroke={props.color ?? "#30373F"}
      strokeWidth={2}
    />
  </svg>
);
export default SvgIcCheck;
