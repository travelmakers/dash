import * as React from "react";
import { SVGProps } from "react";

const SvgIcEdit = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.182 4.575a2 2 0 0 1 2.828 0l1.415 1.415a2 2 0 0 1 0 2.828l-8.952 8.952-5.19.948.947-5.191 8.952-8.952Z"
      stroke={props.color ?? "#30373F"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m6.838 13.547 3.672 3.672M14.616 5.769l3.672 3.672"
      stroke={props.color ?? "#30373F"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgIcEdit;
