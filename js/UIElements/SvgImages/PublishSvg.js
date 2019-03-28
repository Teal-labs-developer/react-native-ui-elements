import React, { PropTypes } from "react";
import Svg, { G, Path, Circle, Rect } from "react-native-svg";

const PublishSvg = props => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 18 18"
      version="1.1"
    >
      <G
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <Path
          d="M7.89875619,9.98227932 L8.00980131,10.093154 L11.1015129,17.5625664 C11.2541745,17.9256256 11.6744117,18.0975027 12.0397896,17.9434884 C12.2215974,17.8706675 12.3587709,17.7234982 12.4372009,17.5281095 L17.9598874,0.937829922 C18.0921383,0.559461884 17.8874333,0.161214116 17.4920098,0.0419436101 C17.341949,-0.0144048983 17.1966096,-0.0144048983 17.0392448,0.044529279 L0.4929532,5.55089924 C0.11056318,5.6657706 -0.0941418606,6.06401836 0.0423788683,6.45613694 C0.09514454,6.64987139 0.235994811,6.80686731 0.44557382,6.913525 L7.89875619,9.98227932 Z M9.44805695,9.75770976 L9.49256074,9.53535608 L15.6517971,3.36783258 L11.6937039,15.2303726 L9.44805695,9.75770976 Z M8.45603465,8.52250979 L8.23417975,8.56676532 L2.76848105,6.31793673 L14.6431115,2.35440088 L8.45603465,8.52250979 Z"
          id="Shape"
          fill={props.fill}
          fill-rule="nonzero"
        />
      </G>
    </Svg>
  );
};

PublishSvg.defaultProps = {
  fill: "#797979",
  height: 18,
  width: 18
};

export default PublishSvg;