import React from "react";
import Svg, { G, Path } from "react-native-svg";
import { colors } from "../colors";

const LikeFillSvg = props => {
  return (
    <Svg width={props.width} height={props.height} viewBox="0 0 20 18">
      <G
        stroke="none"
        strokeWidth="1"
        fill="none"
        transform={{ translate: "-23, -1098" }}
      >
        <G id="Group" transform={{ translate: "0, 692" }} fill={props.fill}>
          <Path d="M41.408389,407.502695 C40.4356476,406.505945 39.0960344,406 37.4259242,406 C35.4806913,406 33.7755814,407.601161 32.9230889,409.412868 C32.3124693,407.883076 31.0211057,406 28.3683791,406 C25.6756529,406 23.5685464,407.850763 23.1230504,410.625253 C21.9001862,418.244064 30.1336135,422.565393 32.686091,423.709844 L32.8395896,423.777778 L32.9998382,423.723456 C33.0998373,423.689489 43,420.240872 43,411.584601 C43,411.486134 43,409.137824 41.408389,407.502695 Z" />
        </G>
      </G>
    </Svg>
  );
};

LikeFillSvg.defaultProps = {
  fill: colors.reddishPink,
  height: 18,
  width: 20
};

export default LikeFillSvg;
