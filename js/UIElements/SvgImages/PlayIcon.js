import React from "react";
import PropTypes from "prop-types";
import Svg, { G, Path, Rect } from "react-native-svg";
import { colors } from "js/UIElements/colors";

const PlayIcon = props => {
  return (
    <Svg viewBox="0 0 12 16" width={props.width} height={props.height}>
      <G
        id="Assessment"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <G id="Group-64" transform={{ translate: "-3,  0" }}>
          <Rect id="Rectangle" x="0" y="0" width="16" height="16" />
          <Path
            d="M4.5547002,1.0364668 L13.7519246,7.16794971 C14.2114532,7.47430216 14.3356271,8.09517151 14.0292747,8.5547002 C13.9560398,8.66455248 13.8617768,8.75881544 13.7519246,8.83205029 L4.5547002,14.9635332 C4.09517151,15.2698857 3.47430216,15.1457118 3.16794971,14.6861831 C3.05843803,14.5219156 3,14.3289079 3,14.1314829 L3,1.86851709 C3,1.31623234 3.44771525,0.868517092 4,0.868517092 C4.19742499,0.868517092 4.39043268,0.926955119 4.5547002,1.0364668 Z"
            id="Rectangle"
            fill={props.fill && props.fill}
          />
        </G>
      </G>
    </Svg>
  );
};

PlayIcon.defaultProps = {
  height: 16,
  width: 16,
  fill: colors.strokeTwo
};
PlayIcon.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  fill: PropTypes.string
};
export default PlayIcon;
