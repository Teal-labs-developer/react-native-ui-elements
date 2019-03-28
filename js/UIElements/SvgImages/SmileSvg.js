import React from "react";
import PropTypes from "prop-types";
import Svg, { G, Path } from "react-native-svg";
import { colors } from "js/UIElements/colors";

const SmileSvg = props => {
  return (
    <Svg width={props.width} height={props.height} viewBox="0 0 20 20">
      <G
        stroke="none"
        strokeWidth="1"
        transform={{ translate: "-279.000000, -629.000000" }}
      >
        <G transform={{ translate: "0.000000, 610.000000" }} fill={props.fill}>
          <Path d="M289,39 C283.485546,39 279,34.5136371 279,29 C279,23.4863629 283.485546,19 289,19 C294.514454,19 299,23.4863629 299,29 C299,34.5136371 294.514454,39 289,39 Z M289,20.1824269 C284.138004,20.1824269 280.182427,24.1380042 280.182427,29 C280.182427,33.8619958 284.138004,37.8175731 289,37.8175731 C293.861996,37.8175731 297.817573,33.8619958 297.817573,29 C297.817573,24.1380042 293.861996,20.1824269 289,20.1824269 Z M294.730851,31.6130982 C294.845991,31.3738364 294.760248,31.0782296 294.539768,30.9532909 C294.320105,30.8283521 294.047362,30.9206271 293.931406,31.1598889 C293.793402,31.44488 292.487669,33.947738 288.984485,34.066144 C285.566226,34.1747509 284.132288,31.292177 284.070227,31.1623387 C283.955904,30.9230769 283.685612,30.8275355 283.464315,30.9516577 C283.243018,31.0757798 283.155643,31.3689368 283.269149,31.6098318 C283.336926,31.751919 284.941532,35.0468724 288.78197,35.0468724 C288.857913,35.0460559 288.933856,35.0444227 289.012249,35.0419729 C292.944145,34.9096848 294.465458,32.1626654 294.730851,31.6130982 Z M286.666993,27.032827 C286.666993,27.7277478 286.295443,28.2920137 285.838151,28.2920137 C285.380859,28.2920137 285.009309,27.7277478 285.009309,27.032827 C285.009309,26.3379063 285.380859,25.7736404 285.838151,25.7736404 C286.295443,25.7736404 286.666993,26.3379063 286.666993,27.032827 Z M293.060918,27.032827 C293.060918,27.7277478 292.690185,28.2920137 292.232892,28.2920137 C291.7756,28.2920137 291.40405,27.7277478 291.40405,27.032827 C291.40405,26.3379063 291.774784,25.7736404 292.232892,25.7736404 C292.691001,25.7736404 293.060918,26.3379063 293.060918,27.032827 Z" />
        </G>
      </G>
    </Svg>
  );
};

SmileSvg.defaultProps = {
  fill: colors.soapstone,
  height: 20,
  width: 20
};

export default SmileSvg;
