import * as React from "react";
import { SVGProps } from "react";

const SvgIcArrowSingleRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    {...props}
  >
    <path d="M2 19h28l-6.304-6" stroke={props.color ?? "#30373F"} />
  </svg>
);
export default SvgIcArrowSingleRight;
