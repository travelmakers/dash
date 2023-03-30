import * as React from "react";
import { SVGProps } from "react";

const SvgIcAngleRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    {...props}
  >
    <path
      d="M9.444 2.009 8.029 3.423 22.172 16.15 8.029 28.879l1.415 1.414L25 16.15 9.444 2.009Z"
      fill={props.color ?? "#30373F"}
    />
  </svg>
);
export default SvgIcAngleRight;
