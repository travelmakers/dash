import * as React from "react";
import { SVGProps } from "react";

const SvgIcHome = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={props.color ?? "none"}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 8.84184C2 8.73585 2.05366 8.61685 2.17689 8.53351L11.7102 2.08646C11.8807 1.97118 12.1193 1.97118 12.2898 2.08646L21.8231 8.53351C21.9463 8.61685 22 8.73584 22 8.84184V20.9078C22 21.4643 21.5107 22 20.8 22H15.3889C15.0821 22 14.8333 21.7513 14.8333 21.4444V19.3333C14.8333 17.7685 13.5648 16.5 12 16.5C10.4352 16.5 9.16667 17.7685 9.16667 19.3333V21.4444C9.16667 21.7513 8.91794 22 8.61111 22H3.2C2.48932 22 2 21.4643 2 20.9078V8.84184Z"
      stroke={props.color ? "none" : "#30373F"}
      strokeWidth="2"
    />
  </svg>
);
export default SvgIcHome;
