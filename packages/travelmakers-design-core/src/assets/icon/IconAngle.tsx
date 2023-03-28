import { SVGProps } from "react";

export type Props = {
  size: number;
} & SVGProps<SVGSVGElement>;

export const IconAngle = ({ size, ...props }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clip-path="url(#clip0_3368_7885)">
      <path
        d="M13.6569 4.84314L8.00001 10.5L2.34315 4.84314"
        stroke="#30373F"
      />
    </g>
    <defs>
      <clipPath id="clip0_3368_7885">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
