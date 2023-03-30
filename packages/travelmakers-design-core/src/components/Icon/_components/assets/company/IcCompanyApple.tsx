import * as React from "react";
import { SVGProps } from "react";

const SvgIcCompanyApple = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.854 2.494c-.439.477-1.129.953-1.882.834-.062-.656.251-1.43.69-1.907.44-.477 1.255-.954 1.882-.954.063.894-.25 1.55-.69 2.027ZM10.544 3.626c-1.066-.06-1.944.596-2.384.596-.501 0-1.317-.596-2.133-.596-1.066 0-2.007.596-2.634 1.49-1.192 1.849-.314 4.65.752 6.141.565.775 1.192 1.61 2.07 1.61.816 0 1.067-.477 2.008-.477.941 0 1.255.477 2.133.417.878 0 1.443-.775 1.945-1.49.627-.835.878-1.67.878-1.789 0 0-1.694-.656-1.694-2.504 0-1.61 1.318-2.265 1.443-2.265-.815-1.073-1.945-1.133-2.384-1.133Z"
      fill={props.color ?? "#30373F"}
    />
  </svg>
);
export default SvgIcCompanyApple;
