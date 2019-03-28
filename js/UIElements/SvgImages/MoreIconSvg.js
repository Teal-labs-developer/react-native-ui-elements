import React from "react";
import PropTypes from "prop-types";
import Svg, { G, Path } from "react-native-svg";

const MoreIconSvg = props => {
  return (
    <Svg height={props.height} width={props.width} viewBox="0 0 20 20">
      <G
        stroke="none"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        transform={{ translate: "-314,  -623" }}
      >
        <G
          transform={{ translate: "0,  610" }}
          fill={props.fill}
          fillRule="nonzero"
          stroke={"#FFFFFF"}
          strokeWidth="0.5"
        >
          <Path d="M332.472413,30.31 C333.068799,30.3655528 333.524826,30.8660322 333.524826,31.465 C333.524826,32.0639678 333.068799,32.5644472 332.472413,32.62 L316.112413,32.62 C315.516027,32.5644472 315.06,32.0639678 315.06,31.465 C315.06,30.8660322 315.516027,30.3655528 316.112413,30.31 L332.472413,30.31 Z M316.112413,16.31 C315.516027,16.2544472 315.06,15.7539678 315.06,15.155 C315.06,14.5560322 315.516027,14.0555528 316.112413,14 L332.472413,14 C333.068799,14.0555528 333.524826,14.5560322 333.524826,15.155 C333.524826,15.7539678 333.068799,16.2544472 332.472413,16.31 L316.112413,16.31 Z M316.052413,24.46 C315.456027,24.4044472 315,23.9039678 315,23.305 C315,22.7060322 315.456027,22.2055528 316.052413,22.15 L332.532413,22.15 C333.128799,22.2055528 333.584826,22.7060322 333.584826,23.305 C333.584826,23.9039678 333.128799,24.4044472 332.532413,24.46 L316.052413,24.46 Z" />
        </G>
      </G>
    </Svg>
  );
};

MoreIconSvg.defaultProps = {
  fill: "black",
  height: 24,
  width: 24
};

export default MoreIconSvg;
