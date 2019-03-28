import React from "react";
import Svg, { G, Path } from "react-native-svg";

const CheckboxOff = props => {
  return (
    <Svg x="0px" y="0px" fill={props.fill} viewBox="0 0 12 12">
      <Path
        fill={props.fill}
        d="M10.362999,12H1.636002C0.734001,12,0,11.19838,0,10.296371V1.568375C0,0.666382,0.734001,0,1.636002,0
    	h8.726997C11.265999,0,12,0.666382,12,1.568375v8.727997C12,11.19838,11.265999,12,10.362999,12 M1.636002,1
    	C1.334999,1.023376,1,1.268372,1,1.568375v8.727997C1,10.596375,1.334999,10.75,1.636002,10.75h8.726997
    	C10.664001,10.75,11,10.596375,11,10.296371V1.568375C11,1.268372,10.664001,1,10.362999,1H1.636002z"
      />
    </Svg>
  );
};

CheckboxOff.defaultProps = {
  fill: "#000000",
  height: 20,
  width: 20
};

export default CheckboxOff;
