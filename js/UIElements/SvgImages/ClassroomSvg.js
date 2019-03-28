import React from "react";
import Svg, { G, Path } from "react-native-svg";

const ClassroomSvg = props => {
  return (
    <Svg height={props.height} width={props.width}>
      <G fill={props.fill}>
        <Path d="M20,5.95H8a5.11,5.11,0,0,0-5.11,5.1V16A5.11,5.11,0,0,0,8,21.1h1.1l-.34,3.19a.7.7,0,0,0,.62.78h.08a.7.7,0,0,0,.7-.62l.36-3.35h6.91l.38,3.35a.7.7,0,0,0,.7.62h.08a.7.7,0,0,0,.62-.78l-.37-3.19H20A5.11,5.11,0,0,0,25.08,16V11.05A5.11,5.11,0,0,0,20,5.95Zm3.63,10A3.63,3.63,0,0,1,20,19.62H8A3.63,3.63,0,0,1,4.39,16V11.05A3.63,3.63,0,0,1,8,7.42H20a3.63,3.63,0,0,1,3.63,3.63Z" />
      </G>
    </Svg>
  );
};

ClassroomSvg.defaultProps = {
  fill: "black",
  height: 28,
  width: 28
};

export default ClassroomSvg;
