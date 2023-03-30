import * as React from "react";
import { SVGProps } from "react";

const SvgIcReset = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    {...props}
  >
    <path
      d="M7 2a6 6 0 0 1 6 6M1 8a6 6 0 0 1 6-6M1 8a6 6 0 0 0 6 6M7 14c2.22 0 4.16-1.207 5.197-3"
      stroke={props.color ?? "#30373F"}
    />
    <path d="m10 6.464 3.464 2 2-3.464" stroke={props.color ?? "#30373F"} />
  </svg>
);
export default SvgIcReset;
