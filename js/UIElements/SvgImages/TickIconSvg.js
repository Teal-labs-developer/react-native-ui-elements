import React from "react";
import PropTypes from "prop-types";
import Svg, { G, Path, Rect } from "react-native-svg";

const TickIconSvg = props => {
  return (
    <Svg height={props.height} width={props.width} viewBox="0 0 32 32">
      <G stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
        <G fill={props.fill}>
          <G>
            <Rect
              stroke="#FFFFFF"
              stroke-width="1.3"
              x="0.65"
              y="0.65"
              width="30.7"
              height="30.7"
              rx="15.35"
            />
          </G>
          <Path
            d="M23.805,11.1961914 C23.545,10.9346029 23.1224,10.9346029 22.8624,11.1961914 L13.7254,20.3889163 L9.139,15.7730856 C8.8776,15.5114971 8.4563,15.5114971 8.195,15.7730856 C7.935,16.0346742 7.935,16.4599568 8.195,16.7215454 L13.2468,21.8028025 C13.3761,21.934301 13.5468,22 13.7174,22 C13.8881,22 14.0587,21.934301 14.1894,21.8028025 C14.2014,21.7894212 14.2067,21.7733235 14.2187,21.7585336 C14.2481,21.7371035 14.2814,21.7250302 14.3081,21.6981671 L23.805,12.1445505 C24.065,11.882962 24.065,11.45778 23.805,11.1961914 Z"
            fill="#FFFFFF"
          />
        </G>
      </G>
    </Svg>
  );
};
TickIconSvg.defaultProps = {
  fill: "black",
  height: 32,
  width: 32
};

export default TickIconSvg;
