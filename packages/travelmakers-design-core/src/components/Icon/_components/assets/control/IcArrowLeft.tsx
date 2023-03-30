import * as React from "react";
import { SVGProps } from "react";

const SvgIcArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    {...props}
  >
    <path
      d="m10.707 20.646-.707.707L.646 12 10 2.646l.707.708L2.561 11.5h20.792v1H2.561l8.146 8.146Z"
      fill={props.color ?? "#30373F"}
    />
  </svg>
);
export default SvgIcArrowLeft;
