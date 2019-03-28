import React from "react";
import PropTypes from "prop-types";
import Svg, { G, Path, Circle } from "react-native-svg";

const RecordStart = props => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 80 80"
      version="1.1"
    >
      <G
        id="Video-recording_Yet-to-start"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        transform="translate(-148.000000, -563.000000)"
      >
        <G id="Record" transform="translate(148.000000, 563.000000)">
          <Circle id="Oval" fill="#FFFFFF" cx="40" cy="40" r="40" />
          <Path
            d="M40,56 C31.163444,56 24,48.836556 24,40 C24,31.163444 31.163444,24 40,24 C48.836556,24 56,31.163444 56,40 C56,48.836556 48.836556,56 40,56 Z"
            id="Oval-6-Copy"
            fill="#FF2D55"
            fillRule="nonzero"
          />
        </G>
      </G>
    </Svg>
  );
};

RecordStart.defaultProps = {
  height: 80,
  width: 80
};

export default RecordStart;
