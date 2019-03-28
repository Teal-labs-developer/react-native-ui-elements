import React from "react";
import Svg, { G, Path } from "react-native-svg";

const ActivityIconSvg = props => {
  return (
    <Svg height={props.height} width={props.width} viewBox="0 0 24 20">
      <G
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        transform={{ translate: "-38,  -624" }}
      >
        <G transform={{ translate: "0, 610" }}>
          <G transform={{ translate: "38, 14" }}>
            <Path
              d="M19.82,1.79 C20.7920212,1.79 21.58,2.57797884 21.58,3.55 L21.58,10.22 C21.5853439,10.6902366 21.4022777,11.1430547 21.0716327,11.4774571 C20.7409877,11.8118594 20.290267,12.0000304 19.82,12 L4.18,12 C3.20797884,12 2.42,11.2120212 2.42,10.24 L2.42,3.55 C2.42,2.57797884 3.20797884,1.79 4.18,1.79 L19.82,1.79 Z M19.82,0.29 L4.18,0.29 C2.37955172,0.29 0.92,1.74955172 0.92,3.55 L0.92,10.22 C0.92,12.0204483 2.37955172,13.48 4.18,13.48 L19.82,13.48 C21.6204483,13.48 23.08,12.0204483 23.08,10.22 L23.08,3.55 C23.08,1.74955172 21.6204483,0.29 19.82,0.29 Z"
              id="Shape"
              fill={props.fill}
              fillRule="nonzero"
            />
            <Path
              d="M15.06,18.55 L1.76,18.55"
              id="Shape"
              stroke={props.fill}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};

ActivityIconSvg.defaultProps = {
  fill: "black",
  height: 24,
  width: 24
};

export default ActivityIconSvg;
