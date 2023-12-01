import * as React from "react";
import { SVGProps } from "react";

const SvgLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 66 66"
    width="1em"
    height="1em"
    {...props}
  >
    <defs>
      {/* <style>
        {`.logo_svg__cls-1{fill: ${props.fill}};stroke:${props.fill};stroke-linecap:round;stroke-linejoin:round;stroke-width:6px}`}
      </style> */}
    </defs>
    <g id="logo_svg__Text">
      <path
        className="logo_svg__cls-1"
        d="M43 18h17l-9.5 9.5M13.84 37l-8 8 13 13h16l-12.5-12.5"
      />
      <path
        className="logo_svg__cls-1"
        d="M38.84 8.08h-13l-13 13 28.5 28.5h15.5L28.09 20.83 38.84 8.08z"
      />
    </g>
  </svg>
);

export default SvgLogo;
