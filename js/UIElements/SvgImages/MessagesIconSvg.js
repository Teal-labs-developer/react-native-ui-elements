import React from "react";
import Svg, { G, Path } from "react-native-svg";

const MessagesIconSvg = props => {
  return (
    <Svg height={props.height} width={props.width} viewBox="0 0 23 19">
      <G
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        transform={{ translate: "-221,  -624" }}
      >
        <G
          transform={{ translate: "0,  610" }}
          fill={props.fill}
          fillRule="nonzero"
        >
          <Path d="M242.59,19.8446894 C242.148482,19.0857089 241.499818,18.4682646 240.72,18.0646894 L234.29,14.5546894 C232.913025,13.8151035 231.256975,13.8151035 229.88,14.5546894 L223.45,18.0646894 C222.666496,18.4667209 222.014214,19.0843066 221.57,19.8446894 C221.196543,20.5250638 221.000511,21.2885586 221,22.0646894 L221,28.4246894 C221,30.8602652 222.974424,32.8346894 225.41,32.8346894 L238.76,32.8346894 C241.195576,32.8346894 243.17,30.8602652 243.17,28.4246894 L243.17,22.0646894 C243.166858,21.2876337 242.967345,20.5239803 242.59,19.8446894 Z M234.07,25.1746894 C232.86801,26.0116477 231.27199,26.0116477 230.07,25.1746894 L223,20.2946894 C223.308954,19.8767889 223.709086,19.5347961 224.17,19.2946894 L230.6,15.7946894 C231.557508,15.2897465 232.702492,15.2897465 233.66,15.7946894 L240,19.2946894 C240.457687,19.5354641 240.854418,19.8774734 241.16,20.2946894 L234.07,25.1746894 Z M238.76,31.4346894 L225.41,31.4346894 C223.753146,31.4346894 222.41,30.0915437 222.41,28.4346894 L222.41,22.0646894 C222.400188,21.9248613 222.400188,21.7845175 222.41,21.6446894 L229.3,26.3346894 C230.982474,27.4601408 233.177526,27.4601408 234.86,26.3346894 L241.72,21.6346894 C241.731259,21.78114 241.731259,21.9282388 241.72,22.0746894 L241.72,28.4346894 C241.714687,30.0721517 240.397326,31.4028651 238.76,31.4246894 L238.76,31.4346894 Z" />
        </G>
      </G>
    </Svg>
  );
};

MessagesIconSvg.defaultProps = {
  fill: "black",
  height: 24,
  width: 24
};

export default MessagesIconSvg;