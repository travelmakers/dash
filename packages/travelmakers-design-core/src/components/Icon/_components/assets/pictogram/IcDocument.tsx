import * as React from "react";
import { SVGProps } from "react";

const SvgIcDocument = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 0a2 2 0 0 0-2 2v2h13a3 3 0 0 1 3 3v19h2a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H11Z"
      fill={props.color ?? "#30373F"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 6a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5Zm3 6a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H8Zm-1 7a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm1 5a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H8Z"
      fill={props.color ?? "#30373F"}
    />
  </svg>
);
export default SvgIcDocument;
