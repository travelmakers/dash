import * as React from "react";
import { SVGProps } from "react";

const SvgIcCompanyYoutube = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.358 9.827V5.743l3.94 2.05-3.94 2.034Zm8.9-3.89c-.037-.542-.092-1.08-.284-1.599a1.794 1.794 0 0 0-1.127-1.117c-.3-.109-.618-.128-.934-.145a87.574 87.574 0 0 0-5.862-.122c-1.45.015-2.899.034-4.344.155-.769.065-1.348.418-1.647 1.142-.14.34-.226.693-.263 1.058a28.143 28.143 0 0 0-.036 5.01c.039.5.118.993.316 1.463.207.491.573.804 1.08.968.35.113.715.15 1.079.173 1.605.098 3.213.106 4.82.129 1.736-.02 3.472-.028 5.203-.165.72-.057 1.296-.355 1.62-1.02.172-.353.27-.729.312-1.117.176-1.602.177-3.207.067-4.813Z"
      fill={props.color ?? "#30373F"}
    />
  </svg>
);
export default SvgIcCompanyYoutube;
