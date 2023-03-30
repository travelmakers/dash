import * as React from 'react';
import { SVGProps } from 'react';

const SvgIcDiscount = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    {...props}
  >
    <g clipPath="url(#ic-discount_svg__a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M-.5 6.25a3.75 3.75 0 1 1 0 7.5v3.75h21v-3.75a3.75 3.75 0 1 1 0-7.5V2.5h-21v3.75Z"
        fill="#03936E"
      />
      <circle
        cx={1.929}
        cy={1.929}
        r={1.479}
        transform="matrix(1 0 0 -1 5.5 9.357)"
        stroke="#fff"
        strokeWidth={0.9}
      />
      <circle
        cx={1.929}
        cy={1.929}
        r={1.479}
        transform="matrix(1 0 0 -1 10.643 14.5)"
        stroke="#fff"
        strokeWidth={0.9}
      />
      <path d="M13 5.5h1.5l-7.5 9H5.5l7.5-9Z" fill="#fff" />
    </g>
    <defs>
      <clipPath id="ic-discount_svg__a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcDiscount;
