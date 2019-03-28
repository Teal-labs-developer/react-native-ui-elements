import PropTypes from "prop-types";
import React from "react";
import Svg, { G, Path } from "react-native-svg";

const EmptySvg = props => {
  return (
    <svg width={props.width} height={props.height} viewBox="0 0 124 124">
      <g
        id="Evidence"
        stroke="none"
        strokeWidth="1"
        fill={props.fill && props.fill}
      >
        <path
          d="M20.4,11.2 L75.4,1.6 L93,12.4 L100.2,53 L19,67.4 L11.4,24.2 C10.4,18 14.4,12.4 20.4,11.2 Z"
          id="Path"
          stroke="#797979"
          strokeWidth="1.5"
          fill="#EBEBEB"
          fill-rule="nonzero"
        />
        <path
          d="M75.5651978,2.67378561 C75.5470615,2.55590003 75.5716637,2.43541432 75.6345636,2.33407559 C75.7801908,2.09945394 76.0884434,2.0273097 76.3230651,2.17293694 L91.7107227,11.7238969 C91.8295411,11.7976462 91.9120438,11.9177852 91.9382106,12.0551609 C91.9898801,12.3264262 91.8118626,12.5882166 91.5405973,12.6398862 L88.6,13.2 C82.6,14.2 76.8,10.2 75.8,4.2 L75.5651978,2.67378561 Z"
          id="Path"
          stroke="#797979"
          strokeWidth="1.5"
          fill="#EBEBEB"
          fill-rule="nonzero"
        />
        <path
          d="M62.8,59.8 L55.2,57.6 C51.2,56.4 49,52.2 50.2,48.2 L58.8,20.2 C60,16.2 64.2,14 68.2,15.2 L111.6,28.4 C115.6,29.6 117.8,33.8 116.6,37.8 L108,65.8 C106.8,69.8 102.6,72 98.6,70.8 L62.8,59.8 Z"
          id="Path"
          stroke="#797979"
          strokeWidth="1.5"
          fill="#FFFFFF"
          fill-rule="nonzero"
        />
        <path
          d="M70.6,62 C70.6,62 85.6,44.4 91.6,46.2 C97.6,48 100.2,71 100.2,71 L70.6,62 Z"
          id="Path"
          stroke="#797979"
          strokeWidth="1.5"
          fill="#EBEBEB"
          fill-rule="nonzero"
        />
        <circle
          id="Oval"
          stroke="#797979"
          strokeWidth="1.5"
          fill="#FFFFFF"
          fill-rule="nonzero"
          cx="102.2"
          cy="37.4"
          r="3.6"
        />
        <path
          d="M54.2,57.2 C54.2,57.2 72.2,32.8 79,35 C85.8,37 87,67.2 87,67.2 L54.2,57.2 Z"
          id="Path"
          stroke="#797979"
          strokeWidth="1.5"
          fill="#EBEBEB"
          fill-rule="nonzero"
        />
        <path
          d="M105.8,123.8 L18.2,123.8 C11,123.8 5.2,118 5.2,110.8 L5.2,51.4 C5.2,44.2 11,38.4 18.2,38.4 L35.8,38.4 C38.4,38.4 40.6,39.4 42.4,41.4 L50.6,51 C52.2,52.8 54.6,54 57.2,54 L105.8,54 C113,54 118.8,59.8 118.8,67 L118.8,111 C118.8,118 113,123.8 105.8,123.8 Z"
          id="Path"
          stroke="#797979"
          strokeWidth="1.5"
          fill="#FFFFFF"
          fill-rule="nonzero"
        />
        <path
          d="M34.4,77 L89.8,77"
          id="Path"
          stroke="#797979"
          strokeWidth="1.5"
          fill="#FFFFFF"
          fill-rule="nonzero"
        />
        <path
          d="M34.4,89.2 L89.8,89.2"
          id="Path"
          stroke="#797979"
          strokeWidth="1.5"
          fill="#FFFFFF"
          fill-rule="nonzero"
        />
        <path
          d="M34.4,101.4 L89.8,101.4"
          id="Path"
          stroke="#797979"
          strokeWidth="1.5"
          fill="#FFFFFF"
          fill-rule="nonzero"
        />
        <path
          d="M32.4,38.6 C32.4,38.6 32.4,33.2 27,33.2 C21.6,33.2 21.6,38.6 21.6,38.6 L21.6,57.6 C21.6,57.6 21.6,63 27,63 C32.4,63 32.4,57.6 32.4,57.6 L32.4,46.8 C32.4,46.8 32.4,44 29.6,44 C26.8,44 26.8,46.8 26.8,46.8 L26.8,57.6"
          id="Path"
          stroke="#797979"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
};

EmptySvg.defaultProps = {
  height: 124,
  width: 124
};

EmptySvg.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.number,
  fill: PropTypes.string
};

export default EmptySvg;
