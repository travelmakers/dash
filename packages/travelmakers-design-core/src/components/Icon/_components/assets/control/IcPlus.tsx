import * as React from "react";
import { SVGProps } from "react";

const SvgIcPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    {...props}
  >
    <path d="M1.3 8h13.4M8 14.7V1.3" stroke={props.color ?? "#30373F"} />
  </svg>
);
export default SvgIcPlus;
