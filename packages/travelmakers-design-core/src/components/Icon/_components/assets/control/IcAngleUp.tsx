import * as React from "react";
import { SVGProps } from "react";

const SvgIcAngleUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    {...props}
  >
    <path
      d="m2.509 23.056 1.414 1.415L16.65 10.328l12.728 14.143 1.414-1.415L16.65 7.5 2.509 23.056Z"
      fill={props.color ?? "#30373F"}
    />
  </svg>
);
export default SvgIcAngleUp;
