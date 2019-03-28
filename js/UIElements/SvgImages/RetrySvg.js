import React from "react";
import PropTypes from "prop-types";
import Svg, { G, Path, Circle, Rect } from "react-native-svg";
import { colors } from "../colors";

const RetrySvg = props => {
  return (
    <Svg width={props.width} height={props.height} viewBox="0 0 90 90">
      <G stroke="none" strokeWidth="1" fill={props.fill}>
        <Path
          d="M90,45 C90,69.8 69.8,90 45,90 C20.2,90 0,69.8 0,45 C0,20.2 20.2,0 45,0 C46.1,0 47,0.9 47,2 C47,3.1 46.1,4 45,4 C22.4,4 4,22.4 4,45 C4,67.6 22.4,86 45,86 C67.6,86 86,67.6 86,45 C86,32.2 80.1,20.3 70,12.5 L70,28 C70,29.1 69.1,30 68,30 C66.9,30 66,29.1 66,28 L66,8 C66,6.9 66.9,6 68,6 L88,6 C89.1,6 90,6.9 90,8 C90,9.1 89.1,10 88,10 L73.3,10 C83.8,18.5 90,31.4 90,45 Z"
          transform="translate(45.000000, 45.000000) scale(1, -1) translate(-45.000000, -45.000000) "
        />
      </G>
    </Svg>
  );
};

RetrySvg.defaultProps = {
  width: 24,
  height: 24,
  fill: colors.pepper
};

export default RetrySvg;
