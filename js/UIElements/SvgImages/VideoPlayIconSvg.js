import React from "react";
import PropTypes from "prop-types";
import Svg, { G, Path, Circle } from "react-native-svg";

const VideoPlayIconSvg = props => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 100 100"
      version="1.1"
    >
      <G
        id="Icon"
        stroke="none"
        strokeWidth="1"
        fill="#000000"
        fillRule="evenodd"
      >
        <Circle
          id="Oval"
          fillOpacity="0.6"
          fill="#000000"
          fillRule="nonzero"
          cx="50"
          cy="50"
          r="50"
        />
        <Path
          d="M43.2389587,32.1593058 L67.3998429,48.2665619 C68.3571942,48.9047962 68.6158898,50.198274 67.9776556,51.1556254 C67.8250829,51.3844844 67.6287017,51.5808654 67.3998429,51.7334381 L43.2389587,67.8406942 C42.2816073,68.4789285 40.9881296,68.2202329 40.3498952,67.2628815 C40.1217458,66.9206575 40,66.5185581 40,66.107256 L40,33.892744 C40,32.7421506 40.9327402,31.8094106 42.0833333,31.8094106 C42.4946354,31.8094106 42.8967348,31.9311565 43.2389587,32.1593058 Z"
          id="Rectangle"
          fill="#FFFFFF"
          fillRule="nonzero"
        />
      </G>
    </Svg>
  );
};

VideoPlayIconSvg.defaultProps = {
  fill: "black",
  height: 40,
  width: 40
};

export default VideoPlayIconSvg;
