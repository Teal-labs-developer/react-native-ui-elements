import React from "react";
import PropTypes from "prop-types";
import Svg, { G, Path, Circle, Rect } from "react-native-svg";

const RadioSVG = props => {
  return (
    <Svg
      height={props.height}
      width={props.width}
      data-name="Layer 1"
      viewBox="0 0 48 48"
    >
      <G>
        <G fill={props.fill} data-name="quiz mcq -single-answer-copy">
          <Path d="M24,33a9,9,0,1,1,9-9,8.99826,8.99826,0,0,1-9,9M24,0A24,24,0,1,0,48,24,24.02413,24.02413,0,0,0,24,0" />
        </G>
      </G>
    </Svg>
  );
};

RadioSVG.defaultProps = {
  fill: "black",
  height: 32,
  width: 32
};

export default RadioSVG;
