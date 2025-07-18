import React from "react";

function Logo() {
  return (
    <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <title>Logo</title>
      <g>
        <path
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          d="M 50,5
             L 11,27
             L 11,72
             L 50,95
             L 89,73
             L 89,28 Z"
        />
        
        <text
          x="50"
          y="60"
          textAnchor="middle"
          fontSize="30"
          fill="currentColor"
          fontFamily="Arial, sans-serif"
          fontWeight="bold"
        >
          T
        </text>
      </g>
    </svg>
  );
}

export default Logo;
