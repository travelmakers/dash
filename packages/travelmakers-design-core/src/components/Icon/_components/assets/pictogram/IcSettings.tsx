import * as React from "react";
import { SVGProps } from "react";

const SvgIcSettings = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="m13.414 4 .663 1.394c.829.29 1.586.733 2.238 1.294l1.541-.123 1.657 2.87-.875 1.273a7.042 7.042 0 0 1 0 2.585l.875 1.272-1.657 2.87-1.54-.123a6.993 6.993 0 0 1-2.239 1.294L13.414 20H10.1l-.664-1.394A6.991 6.991 0 0 1 7.2 17.313l-1.542.122L4 14.565l.876-1.272a7.04 7.04 0 0 1 0-2.585L4 9.435l1.657-2.87 1.542.122a6.993 6.993 0 0 1 2.237-1.293L10.1 4h3.314Z"
      stroke={props.color ?? "#30373F"}
      strokeLinejoin="round"
    />
    <path
      d="M11.757 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      stroke={props.color ?? "#30373F"}
    />
  </svg>
);
export default SvgIcSettings;
