import React from "react";
import PropTypes from "prop-types";
import Svg, { G, Path, Circle, Rect } from "react-native-svg";

const SquareTickSvg = props => {
  return (
    <Svg height={props.height} width={props.width} viewBox="0 0 28 28">
      <G
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        transform={{ translate: "-323, -428" }}
      >
        <Rect
          stroke={props.strokeColor}
          strokeWidth={props.strokeWidth}
          x="324"
          y="429"
          height={24}
          width={24}
          rx="4"
        />
      </G>
    </Svg>
  );
};

SquareTickSvg.defaultProps = {
  strokeColor: "#D7D7DB",
  height: 24,
  width: 24,
  strokeWidth: 2
};

export default SquareTickSvg;
