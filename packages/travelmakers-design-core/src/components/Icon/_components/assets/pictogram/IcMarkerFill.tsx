import * as React from "react";
import { SVGProps } from "react";

const SvgIcMarkerFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2a8 8 0 0 0-2.549 15.585L12 22l2.549-4.415A8 8 0 0 0 12 2Z"
      fill={"#367CE1"}
    />
    <rect x={9} y={7} width={6} height={6} rx={3} fill="#fff" />
  </svg>
);
export default SvgIcMarkerFill;
