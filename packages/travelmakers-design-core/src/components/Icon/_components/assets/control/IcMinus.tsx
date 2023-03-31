import * as React from "react";
import { SVGProps } from "react";

const SvgIcMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    {...props}
  >
    <path d="M3 8h10" stroke={props.color ?? "#30373F"} />
  </svg>
);
export default SvgIcMinus;
