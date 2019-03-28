import React from "react";
import PropTypes from "prop-types";
import { colors } from "../colors";
import Svg, { G, Path } from "react-native-svg";

const RightChevronSvg = props => {
  return (
    <Svg width={props.width} height={props.height} viewBox="0 0 18 32">
      <Path
        fill={props.fill}
        d="M0.81755,31.67658 C0.34269242,31.0376326 0.430646059,30.1425473 1.02079,29.60825 L14.36964,15.936 L1.0208,2.26657 C0.515106136,1.74265834 0.515106136,0.912381661 1.0208,0.38847 C1.26119051,0.140173431 1.59201084,-2.3390671e-06 1.93761,-2.3390671e-06 C2.28320916,-2.3390671e-06 2.61402949,0.140173431 2.85442,0.38847 L17.12142,14.99839 C17.6262507,15.5226112 17.6262507,16.3521688 17.12142,16.87639 L2.85441,31.48627 C2.3310803,32.0753435 1.44094692,32.1585113 0.81755,31.67658 Z"
      />
    </Svg>
  );
};

RightChevronSvg.defaultProps = {
  fill: colors.marble,
  width: 10,
  height: 18
};

export default RightChevronSvg;
