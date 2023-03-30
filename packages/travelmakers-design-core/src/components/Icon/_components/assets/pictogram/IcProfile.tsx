import * as React from "react";
import { SVGProps } from "react";

const SvgIcProfile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    {...props}
  >
    <circle
      cx={12.478}
      cy={6.239}
      r={4.239}
      stroke={props.color ?? "#30373F"}
    />
    <path
      d="M4 21.777v-1.834a6.42 6.42 0 0 1 6.42-6.42h4.114a6.42 6.42 0 0 1 6.42 6.42V22"
      stroke={props.color ?? "#30373F"}
    />
  </svg>
);
export default SvgIcProfile;
