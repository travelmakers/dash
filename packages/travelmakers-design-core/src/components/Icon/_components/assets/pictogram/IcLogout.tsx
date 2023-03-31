import * as React from "react";
import { SVGProps } from "react";

const SvgIcLogout = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    {...props}
  >
    <path
      d="M16.027 6.919V4.222H5.421v15.556h10.607v-2.63M12.264 11.78h5.885"
      stroke={props.color ?? "#30373F"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m15.97 9.172 2.609 2.608-2.609 2.609"
      stroke={props.color ?? "#30373F"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgIcLogout;
