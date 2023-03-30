import * as React from "react";
import { SVGProps } from "react";

const IcArrowSingleLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    {...props}
  >
    <path d="M30 19H2l6.304-6" stroke={props.color ?? "#30373F"} />
  </svg>
);
export default IcArrowSingleLeft;
