import * as React from "react";
import { SVGProps } from "react";

const SvgIcCompanyLivinginhotel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.973 12h.2a.08.08 0 0 0 .08-.08v-.52a.193.193 0 0 0-.186-.187h-1.12a.24.24 0 0 1-.24-.233V6.873h-.974v7.794h.974v-.707a.24.24 0 0 1 .24-.233h1.12a.193.193 0 0 0 .186-.187v-.48a.066.066 0 0 0-.08-.073h-.2c-.613 0-1.113-.22-1.113-.487s.5-.5 1.113-.5Z"
      fill={props.color ?? "#30373F"}
    />
    <ellipse
      cx={8.233}
      cy={8.473}
      rx={1.187}
      ry={0.487}
      fill={props.color ?? "#30373F"}
    />
    <rect
      x={7.047}
      y={7.427}
      width={2.373}
      height={0.42}
      rx={0.21}
      fill={props.color ?? "#30373F"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.2 2h-.113a.373.373 0 0 1-.367-.373.287.287 0 0 0-.287-.294h-.426a.287.287 0 0 0-.287.287.373.373 0 0 1-.367.38H7.24a2.56 2.56 0 0 0-2.573 2.547 2.507 2.507 0 0 0 2.506 2.466h2.094a2.507 2.507 0 0 0 2.506-2.466A2.56 2.56 0 0 0 9.2 2Zm.527 4.1c-.48.08-.97-.062-1.334-.387a.26.26 0 0 0-.333 0 1.613 1.613 0 1 1 0-2.406.24.24 0 0 0 .32 0A1.613 1.613 0 1 1 9.713 6.1h.014Z"
      fill={props.color ?? "#30373F"}
    />
  </svg>
);
export default SvgIcCompanyLivinginhotel;
