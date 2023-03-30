import * as React from "react";
import { SVGProps } from "react";

const SvgIcClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    {...props}
  >
    <path
      d="m3.263 3.263 9.474 9.474M3.263 12.737l9.474-9.474"
      stroke={props.color ?? "#30373F"}
    />
  </svg>
);
export default SvgIcClose;
