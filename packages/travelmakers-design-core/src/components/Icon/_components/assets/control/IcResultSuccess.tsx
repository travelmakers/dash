import * as React from 'react';
import { SVGProps } from 'react';

const SvgIcResultSuccess = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    {...props}
  >
    <rect width={24} height={24} rx={12} fill="#03936E" />
    <path d="M6 10.768 10.12 16 18 8" stroke="#fff" strokeWidth={2} />
  </svg>
);
export default SvgIcResultSuccess;
