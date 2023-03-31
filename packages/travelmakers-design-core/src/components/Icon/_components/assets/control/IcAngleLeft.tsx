import * as React from "react";
import { SVGProps } from "react";

const SvgIcAngleLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    {...props}
  >
    <path
      d="m23.556 29.991 1.415-1.414L10.828 15.85 24.971 3.121l-1.415-1.414L8 15.85l15.556 14.142Z"
      fill={props.color ?? "#30373F"}
    />
  </svg>
);
export default SvgIcAngleLeft;
