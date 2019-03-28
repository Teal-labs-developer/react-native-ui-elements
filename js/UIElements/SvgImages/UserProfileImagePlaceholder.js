import React from "react";
import PropTypes from "prop-types";
import Svg, { G, Path } from "react-native-svg";

const UserProfileImagePlaceholder = props => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 40 41"
      version="1.1"
    >
      <G
        id="userProfile"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        transform={{ translate: "-168.000000, -200.000000" }}
      >
        <Path
          d="M169.563906,240.357464 C169.387905,240.357464 169.209196,240.327679 169.035,240.263597 C168.222688,239.972067 167.800286,239.076719 168.092718,238.263504 C171.102786,229.893081 179.103156,224.268271 188.00068,224.268271 C196.897301,224.268271 204.896769,229.892178 207.907738,238.263504 C208.199268,239.075816 207.776866,239.972067 206.965456,240.263597 C206.153145,240.556029 205.255991,240.133627 204.963559,239.321315 C202.398458,232.189216 195.582258,227.395673 188.00068,227.395673 C180.419101,227.395673 173.601096,232.189216 171.035995,239.321315 C170.80584,239.959431 170.20473,240.357464 169.563906,240.357464 Z M187.999777,223.016408 C181.653815,223.016408 176.491122,217.853715 176.491122,211.507753 C176.491122,205.162694 181.653815,200 187.999777,200 C194.345739,200 199.508433,205.162694 199.508433,211.507753 C199.508433,217.853715 194.345739,223.016408 187.999777,223.016408 Z M187.999777,203.127401 C183.378625,203.127401 179.618523,206.887503 179.618523,211.507753 C179.618523,216.128905 183.378625,219.889007 187.999777,219.889007 C192.62093,219.889007 196.381032,216.128905 196.381032,211.507753 C196.381032,206.8866 192.62093,203.127401 187.999777,203.127401 Z"
          id="Shape"
          fill={props.fill}
          fillRule="nonzero"
        />
      </G>
    </Svg>
  );
};

UserProfileImagePlaceholder.defaultProps = {
  fill: "white",
  height: 40,
  width: 40
};

export default UserProfileImagePlaceholder;
