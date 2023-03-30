import * as React from "react";
import { SVGProps } from "react";

const SvgIcClock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    {...props}
  >
    <g clipPath="url(#ic-clock_svg__a)">
      <path
        d="M8 15A6.5 6.5 0 1 0 8 2a6.5 6.5 0 0 0 0 13Z"
        stroke={props.color ?? "#30373F"}
      />
      <path
        d="M5.657 2.121C4.485.95 2.744.791 1.767 1.768c-.976.976-.817 2.717.354 3.889M10 2.121c1.172-1.171 2.913-1.33 3.89-.353.975.976.817 2.717-.354 3.889"
        stroke={props.color ?? "#30373F"}
      />
      <path
        d="M8.5 4.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 1 0v-4Z"
        fill={props.color ?? "#30373F"}
      />
      <path
        d="M10.367 10.827a.5.5 0 0 0 .574-.82l-2.458-1.72a.5.5 0 0 0-.573.819l2.457 1.72ZM12.124 15.363a.5.5 0 1 0 .94-.343l-.342-.94a.5.5 0 1 0-.94.343l.342.94ZM4.064 15.363a.5.5 0 1 1-.94-.343l.342-.94a.5.5 0 0 1 .94.343l-.342.94Z"
        fill={props.color ?? "#30373F"}
      />
    </g>
    <defs>
      <clipPath id="ic-clock_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcClock;
