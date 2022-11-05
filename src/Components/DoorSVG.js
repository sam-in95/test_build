import React from "react";

import classes from "./DoorSVG.module.css";

const DoorSVG = () => {
  return (
    <div>
      <svg
        width="272"
        height="470"
        className={classes.path_1_wrap}
        viewBox="0 0 272 470"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_4_17)">
          <path
            d="M6 462V2H266V462"
            className={classes.path_1}
            stroke="white"
            strokeWidth="3"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_4_17"
            x="0.5"
            y="0.5"
            width="271"
            height="469.5"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_4_17"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_4_17"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      <svg
        width="366"
        height="563"
        className={classes.path_2_wrap}
        viewBox="0 0 366 563"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_68_50)">
          <path
            className={classes.path_2}
            d="M53 513V53H313V513"
            stroke="white"
            strokeWidth="6"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_68_50"
            x="0"
            y="0"
            width="366"
            height="563"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="15"
              result="effect1_foregroundBlur_68_50"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default DoorSVG;
