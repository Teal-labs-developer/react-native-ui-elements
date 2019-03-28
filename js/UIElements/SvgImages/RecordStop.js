import React from "react";
import PropTypes from "prop-types";
import Svg, { G, Path, Circle, Rect } from "react-native-svg";

const RecordStop = props => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 80 80"
      version="1.1"
    >
      <G
        id="Video-recording_on"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        transform="translate(-148.000000, -563.000000)"
      >
        <G id="RecordStop" transform="translate(148.000000, 563.000000)">
          <Circle id="Oval" fill="#FFFFFF" cx="40" cy="40" r="40" />
          <Rect
            id="Rectangle"
            fill="#FF2D55"
            x="28"
            y="28"
            width="24"
            height="24"
            rx="4"
          />
        </G>
      </G>
    </Svg>
  );
};

RecordStop.defaultProps = {
  height: 80,
  width: 80
};

export default RecordStop;
