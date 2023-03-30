import * as React from "react";
import { SVGProps } from "react";

const SvgIcHotelLine = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    {...props}
  >
    <path
      d="M5 22V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"
      stroke={props.color ?? "#30373F"}
    />
    <path
      stroke={props.color ?? "#30373F"}
      strokeWidth={0.5}
      d="M9.25 8.25h.5v1.5h-.5zM14.25 8.25h.5v1.5h-.5zM9.25 12.25h.5v1.5h-.5zM14.25 12.25h.5v1.5h-.5z"
    />
    <path
      d="M10.5 18a1.5 1.5 0 0 1 3 0v3.5h-3V18Z"
      stroke={props.color ?? "#30373F"}
    />
    <path fill={props.color ?? "#30373F"} d="M5 21h14v1H5z" />
  </svg>
);
export default SvgIcHotelLine;
