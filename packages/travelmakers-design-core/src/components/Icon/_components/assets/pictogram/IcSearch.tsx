import * as React from "react";
import { SVGProps } from "react";

const SvgIcSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.713 16.749L22 22M19.3108 10.6036C19.3108 15.3553 15.4357 19.2072 10.6554 19.2072C5.87517 19.2072 2 15.3553 2 10.6036C2 5.85197 5.87517 2 10.6554 2C15.4357 2 19.3108 5.85197 19.3108 10.6036Z"
      stroke={props.color ?? "#30373F"}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
export default SvgIcSearch;
