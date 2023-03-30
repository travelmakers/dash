import * as React from "react";
import { SVGProps } from "react";

const SvgIcExpand = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    {...props}
  >
    <path
      d="M8 16V8h8M8 8l7 7M24 16v8h-8M24 24l-7-7"
      stroke={props.color ?? "#30373F"}
      strokeWidth={2}
    />
  </svg>
);
export default SvgIcExpand;
