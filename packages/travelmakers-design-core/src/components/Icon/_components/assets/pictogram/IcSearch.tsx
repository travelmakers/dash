import * as React from "react";
import { SVGProps } from "react";

const SvgIcSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    {...props}
  >
    <circle cx={9.5} cy={9.5} r={7} stroke={props.color ?? "#30373F"} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m14 14.727.727-.727L22 21.273l-.727.727L14 14.727Z"
      fill={props.color ?? "#30373F"}
    />
  </svg>
);
export default SvgIcSearch;
