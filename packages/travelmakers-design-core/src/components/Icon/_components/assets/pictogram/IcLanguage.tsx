import * as React from "react";
import { SVGProps } from "react";

const SvgIcLanguage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="ic-language">
      <circle
        id="Ellipse 1"
        cx="12"
        cy="12"
        r="10"
        stroke={props.color ?? "#30373F"}
        strokeWidth="2"
      />
      <path
        id="Ellipse 2"
        d="M8 12C8 9 8.99994 3.5 12 2"
        stroke={props.color ?? "#30373F"}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        id="Ellipse 4"
        d="M16 12C16 9 15.0001 3.5 12 2"
        stroke={props.color ?? "#30373F"}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        id="Ellipse 3"
        d="M8 12C8 15 8.99994 20.5 12 22"
        stroke={props.color ?? "#30373F"}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        id="Ellipse 5"
        d="M16 12C16 15 15.0001 20.5 12 22"
        stroke={props.color ?? "#30373F"}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect
        id="Rectangle 29"
        x="2"
        y="11"
        width="20"
        height="2"
        fill={props.color ?? "#30373F"}
      />
    </g>
  </svg>
);
export default SvgIcLanguage;
