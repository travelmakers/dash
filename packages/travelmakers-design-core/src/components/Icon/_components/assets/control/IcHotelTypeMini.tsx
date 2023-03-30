import * as React from 'react';
import { SVGProps } from 'react';

const SvgIcHotelTypeMini = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    {...props}
  >
    <g clipPath="url(#ic-hotel-type-mini_svg__a)">
      <rect width={16} height={16} rx={4} fill="#979B9F" />
      <path
        d="M3.418 3.516V12h1.71V6.422H5.2l2.215 5.543h1.172l2.215-5.52h.07V12h1.711V3.516h-2.18L8.047 9.27h-.094L5.598 3.516h-2.18Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="ic-hotel-type-mini_svg__a">
        <rect width={16} height={16} rx={4} fill="#fff" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcHotelTypeMini;
