import * as React from "react";
import { SVGProps } from "react";

const SvgIcUser = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={props.color ?? "none"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 21.6924C2 21.5715 2 21.4515 2 21.3316C2 20.1105 2.06663 18.8762 2.47533 17.7256C3.71924 14.2236 6.7663 11 12 11C17.2336 11 20.2807 14.2235 21.5246 17.7255C21.9334 18.8762 22 20.1106 22 21.3317C22 21.4516 22 21.5715 22 21.6924C22 22.4146 21.5084 23 20.902 23H3.09804C2.49161 23 2 22.4146 2 21.6924Z"
      stroke={props.color ? "none" : "#30373F"}
      strokeWidth="2"
    />
    <circle
      cx="12"
      cy="5"
      r="4"
      stroke={props.color ? "none" : "#30373F"}
      strokeWidth="2"
    />
  </svg>
);
export default SvgIcUser;
