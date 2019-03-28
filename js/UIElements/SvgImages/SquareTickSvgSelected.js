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
        transform={{ translate: "-323, -504" }}
      >
        <G transform={{ translate: "323, 504" }}>
          <Rect fill={props.fill} x="0" y="0" height="24" width="24" rx="4" />
          <Path
            d="M18.7670833,7.23433975 C18.4565278,6.92188675 17.9517556,6.92188675 17.6412,7.23433975 L10.1402595,14.8018405 L7.36047222,11.9868999 C7.04824444,11.6744469 6.545025,11.6744469 6.23291667,11.9868999 C5.92236111,12.2993529 5.92236111,12.8073294 6.23291667,13.1197824 L9.56859841,16.490649 C9.72304008,16.6477167 9.92693175,16.7261905 10.130704,16.7261905 C10.3345956,16.7261905 10.5383679,16.6477167 10.6944817,16.490649 C10.7088151,16.4746658 10.7151456,16.4554379 10.729479,16.4377723 C10.7645956,16.4121752 10.8043706,16.3977543 10.8362623,16.3656678 L18.7670833,8.36710204 C19.0776389,8.05464904 19.0776389,7.54679275 18.7670833,7.23433975 Z"
            fill={props.tickFill}
          />
        </G>
      </G>
    </Svg>
  );
};

SquareTickSvg.defaultProps = {
  fill: "#10ACBD",
  height: 24,
  width: 24,
  tickFill: "#FFFFFF"
};

export default SquareTickSvg;
