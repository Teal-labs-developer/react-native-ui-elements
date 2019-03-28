import React from "react";
import PropTypes from "prop-types";
import Svg, { G, Path } from "react-native-svg";

const SignOutSvg = props => {
  return (
    <Svg height={props.height} width={props.width} viewBox="0 0 32 32">
      <G fill={props.fill}>
        <Path d="M30.39878,10.81741A15.45335,15.45335,0,0,0,25.08829,3.9845,1.28928,1.28928,0,1,0,23.571,6.06943,12.90188,12.90188,0,1,1,8.53751,5.99206,1.28988,1.28988,0,0,0,7.04343,3.889,15.48243,15.48243,0,0,0,15.97678,32c.23488,0,.46711-.00517.69934-.0155A15.49153,15.49153,0,0,0,30.39878,10.81741Z" />
        <Path d="M16,15.33468a1.03166,1.03166,0,0,0,1.03226-1.03226V1.03226a1.03226,1.03226,0,0,0-2.06452,0V14.30242A1.03166,1.03166,0,0,0,16,15.33468Z" />
      </G>
    </Svg>
  );
};

SignOutSvg.defaultProps = {
  fill: "black",
  height: 32,
  width: 32
};

export default SignOutSvg;
