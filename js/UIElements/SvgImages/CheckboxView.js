import PropTypes from "prop-types";
import React from "react";
import Svg, { G, Path } from "react-native-svg";

const CheckboxView = props => {
  return (
    <Svg viewBox="0 0 24 24" width={props.width} height={props.height}>
      <G stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <Path
          d="M19.4322581,22.0215054 L4.56774194,22.0215054 C3.14277149,22.0215054 1.97849462,20.8572285 1.97849462,19.4322581 L1.97849462,4.56774194 C1.97849462,3.14277149 3.14277149,1.97849462 4.56774194,1.97849462 L14.7526882,1.97849462 C15.3096532,1.97849462 15.7419355,1.54621235 15.7419355,0.989247312 C15.7419355,0.432282269 15.3096532,0 14.7526882,0 L4.56774194,0 C2.02884141,0 0,2.02884141 0,4.56774194 L0,19.4322581 C0,21.9711586 2.02884141,24 4.56774194,24 L19.4322581,24 C21.9711586,24 24,21.9711586 24,19.4322581 L24,12 C24,11.443035 23.5677177,11.0107527 23.0107527,11.0107527 C22.4537876,11.0107527 22.0215054,11.443035 22.0215054,12 L22.0215054,19.4322581 C22.0215054,20.8572285 20.8572285,22.0215054 19.4322581,22.0215054 Z M5.78419918,10.1223593 C5.4124354,10.4994814 5.4124354,11.1463758 5.78419918,11.523498 L9.48129902,15.2738854 C10.0972865,15.8987513 11.3043382,15.8987513 11.9424104,15.2738854 L23.1706395,3.88381998 C23.5424033,3.50669784 23.5424033,2.85980344 23.1706395,2.4826813 C22.8019131,2.10864028 22.1736916,2.10864028 21.8049652,2.4826813 L11.3983138,13.0393273 C11.0302047,13.412742 10.4385194,13.412742 10.0253956,13.0393273 L7.14987355,10.1223593 C6.78114711,9.74831828 6.15292562,9.74831828 5.78419918,10.1223593 Z"
          id="Shape-Copy-6"
          fill={props.fill}
          fillRule="nonzero"
        />
      </G>
    </Svg>
  );
};

CheckboxView.defaultProps = {
  height: 24,
  width: 24,
  fill: "#797979"
};

CheckboxView.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.number,
  fill: PropTypes.string
};

export default CheckboxView;
