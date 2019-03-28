import React from "react";
import PropTypes from "prop-types";
import Svg, { G, Path, Rect } from "react-native-svg";

const TagActivityIcon = props => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 48 48"
      version="1.1"
    >
      <G
        id="Post-creation-flow-5"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fill-rule="evenodd"
      >
        <G id="Post-details_default" transform={{ translate: "-247,  -718" }}>
          <G id="Activity" transform={{ translate: "247,  718" }}>
            <Rect
              id="Rectangle-Copy-11"
              fill="#24CCA8"
              x="0"
              y="0"
              width={props.width}
              height={props.height}
              rx={props.width * 0.375}
            />
            <Path
              d="M26.4855596,30.2472924 C26.8085564,30.2472924 27.0703971,30.5091331 27.0703971,30.83213 C27.0703971,31.1551268 26.8085564,31.4169675 26.4855596,31.4169675 L15.6823105,31.4169675 C15.3593136,31.4169675 15.0974729,31.1551268 15.0974729,30.83213 C15.0974729,30.5091331 15.3593136,30.2472924 15.6823105,30.2472924 L26.4855596,30.2472924 Z M30.3519856,17.2184116 C31.1415334,17.2184116 31.7815884,17.8584666 31.7815884,18.6480144 L31.7815884,24.0658845 C31.7859292,24.4478456 31.6372292,24.8156582 31.3686547,25.0872846 C31.1000803,25.3589111 30.7339714,25.5117575 30.3519856,25.5117329 L17.6480144,25.5117329 C16.8584666,25.5117329 16.2184116,24.8716778 16.2184116,24.08213 L16.2184116,18.6480144 C16.2184116,17.8584666 16.8584666,17.2184116 17.6480144,17.2184116 L30.3519856,17.2184116 Z M30.3519856,16 L17.6480144,16 C16.1855564,16 15,17.1855564 15,18.6480144 L15,24.0658845 C15,25.5283425 16.1855564,26.7138989 17.6480144,26.7138989 L30.3519856,26.7138989 C31.8144436,26.7138989 33,25.5283425 33,24.0658845 L33,18.6480144 C33,17.1855564 31.8144436,16 30.3519856,16 Z"
              stroke="#FFFFFF"
              stroke-width="0.4"
              fill="#FFFFFF"
              fill-rule="nonzero"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};
TagActivityIcon.defaultProps = {
  fill: "white",
  height: 48,
  width: 48
};

export default TagActivityIcon;
