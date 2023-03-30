import * as React from 'react';
import { SVGProps } from 'react';

const SvgIcResultFail = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    {...props}
  >
    <rect width={24} height={24} rx={12} fill="#DA5542" />
    <path d="m7.263 7.263 9.474 9.474M7.263 16.737l9.474-9.474" stroke="#fff" />
  </svg>
);
export default SvgIcResultFail;
