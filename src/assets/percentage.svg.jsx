import * as React from "react";

function PercentageSvgComponent() {
  return (
    <svg className="calc-op-icons" data-name="Layer 1" viewBox="0 0 100 100">
      <defs>
        <style>
          {
            ".prefix__cls-2{fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:4.96px}"
          }
        </style>
      </defs>
      <title>{"Calculator Symbols"}</title>
      <path
        strokeWidth={4.78}
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit={10}
        d="M68.66 25.13L31.34 76.87"
      />
      <ellipse
        className="prefix__cls-2"
        cx={35.66}
        cy={31.71}
        rx={6.14}
        ry={6.62}
      />
      <ellipse
        className="prefix__cls-2"
        cx={64.34}
        cy={69.94}
        rx={6.14}
        ry={6.62}
      />
    </svg>
  );
}

export default PercentageSvgComponent;
