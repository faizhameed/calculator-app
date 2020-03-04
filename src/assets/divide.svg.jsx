import * as React from "react";

function DivideSvgComponent({ fill }) {
  return (
    <svg
      className="calc-op-icons"
      fill={fill}
      data-name="Layer 1"
      viewBox="0 0 100 100"
    >
      <title>{"Calculator Symbols"}</title>
      <path
        fill="none"
        /* stroke="#f6f6f6" */
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={6.24}
        d="M67.89 50H32.11"
      />
      <circle cx={50} cy={34.22} r={5.46} />
      <circle cx={50} cy={65.78} r={5.46} />
    </svg>
  );
}

export default DivideSvgComponent;
