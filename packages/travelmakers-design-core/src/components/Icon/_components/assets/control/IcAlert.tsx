import * as React from "react";
import { SVGProps } from "react";

const SvgIcAlert = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m12.884 13.8.316-8.4h-2.4l.317 8.367 1.767.033ZM12 18a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z"
      fill={props.color ?? "#03936E"}
    />
    <rect
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={11.25}
      stroke={props.color ?? "#03936E"}
      strokeWidth={1.5}
    />
  </svg>
);
export default SvgIcAlert;
