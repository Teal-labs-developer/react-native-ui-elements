import React, { PropTypes } from "react";
import Svg, { G, Path, Circle, Rect } from "react-native-svg";

const RadioSVG = props => {
  return (
    <Svg
      height={props.height}
      width={props.width}
      data-name="Layer 1"
      viewBox="0 0 32 32"
    >
      <G stroke="none" strokeWidth="1" transform={{ translate: "-319, -432" }}>
        <Circle
          stroke={props.stroke}
          strokeWidth="7"
          cx="335"
          cy="448"
          r="12.5"
        />
      </G>
    </Svg>
  );
};

RadioSVG.defaultProps = {
  stroke: "#D7D7DB",
  height: 32,
  width: 32
};

export default RadioSVG;
