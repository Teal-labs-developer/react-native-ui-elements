import PropTypes from "prop-types";
import React from "react";
import Svg, { G, Path } from "react-native-svg";

const ExpandIcon = props => {
  return (
    <Svg
      viewBox="0 0 26 26"
      width={props.width}
      height={props.height}
      fill={props.fill}
    >
      <G
        id="Attachment---Hover"
        strokeWidth="1"
        transform={{ translate: "-822,  670" }}
        fill={props.fill}
      >
        <G id="expand" transform={{ translate: "-823,  671" }}>
          <G id="EXPAND" transform={{ translate: "7,  6" }}>
            <Path
              d="M0.358924793,10.2217072 L0.360331277,7.6882138 C0.360331277,7.41733551 0.579742691,7.1979241 0.851350269,7.19719481 C1.12285366,7.1979241 1.34231717,7.41738761 1.34236926,7.6882138 L1.34163997,9.03625003 L3.62865489,6.74923511 C3.82035337,6.55753663 4.13144667,6.55753663 4.32314515,6.74923511 C4.51479154,6.9408815 4.51484364,7.25202689 4.32314515,7.44372537 L2.03545304,9.73141749 L3.38484366,9.7306882 C3.65566986,9.73074029 3.87581056,9.95088099 3.87586265,10.2217072 C3.87513336,10.4933148 3.65572195,10.7127262 3.38484366,10.7127262 L0.850620981,10.7134034 C0.786704123,10.7134555 0.723516553,10.7016306 0.663819145,10.6766264 C0.604069645,10.6516744 0.549216792,10.6161997 0.502698655,10.5696816 C0.456180518,10.5231635 0.42070588,10.4683106 0.396431018,10.4092383 C0.371426868,10.3495409 0.358872701,10.2856241 0.358924793,10.2217072 Z"
              id="Fill-48"
            />
            <Path
              d="M10.3604534,10.2217072 C10.3605054,10.2856241 10.3479513,10.3495409 10.3229471,10.4092383 C10.2986723,10.4683106 10.2631976,10.5231635 10.2166795,10.5696816 C10.1701614,10.6161997 10.1153085,10.6516744 10.055559,10.6766264 C9.99586159,10.7016306 9.93267402,10.7134555 9.86875717,10.7134034 L7.33453449,10.7127262 C7.0636562,10.7127262 6.84424478,10.4933148 6.8435155,10.2217072 C6.84356759,9.95088099 7.06370829,9.73074029 7.33453449,9.7306882 L8.68392511,9.73141749 L6.39623299,7.44372537 C6.20453451,7.25202689 6.2045866,6.9408815 6.39623299,6.74923511 C6.58793148,6.55753663 6.89902477,6.55753663 7.09072325,6.74923511 L9.37773817,9.03625003 L9.37700889,7.6882138 C9.37706098,7.41738761 9.59652448,7.1979241 9.86802788,7.19719481 C10.1396355,7.1979241 10.3590469,7.41733551 10.3590469,7.6882138 L10.3604534,10.2217072 Z"
              id="Fill-48"
            />
            <Path
              d="M0.358924793,1.20502958 C0.358872701,1.14111273 0.371426868,1.07719587 0.396431018,1.01749846 C0.42070588,0.958426156 0.456180518,0.903573302 0.502698655,0.857055165 C0.549216792,0.810537028 0.604069645,0.775062391 0.663819145,0.750110333 C0.723516553,0.725106183 0.786704123,0.713281304 0.850620981,0.713333396 L3.38484366,0.714010592 C3.65572195,0.714010592 3.87513336,0.933422006 3.87586265,1.20502958 C3.87581056,1.47585578 3.65566986,1.69599648 3.38484366,1.69604858 L2.03545304,1.69531929 L4.32314515,3.9830114 C4.51484364,4.17470988 4.51479154,4.48585527 4.32314515,4.67750166 C4.13144667,4.86920015 3.82035337,4.86920015 3.62865489,4.67750166 L1.34163997,2.39048675 L1.34236926,3.73852297 C1.34231717,4.00934917 1.12285366,4.22881268 0.851350269,4.22954196 C0.579742691,4.22881268 0.360331277,4.00940126 0.360331277,3.73852297 L0.358924793,1.20502958 Z"
              id="Fill-48"
            />
            <Path
              d="M10.3604534,1.20502958 L10.3590469,3.73852297 C10.3590469,4.00940126 10.1396355,4.22881268 9.86802788,4.22954196 C9.59652448,4.22881268 9.37706098,4.00934917 9.37700889,3.73852297 L9.37773817,2.39048675 L7.09072325,4.67750166 C6.89902477,4.86920015 6.58793148,4.86920015 6.39623299,4.67750166 C6.2045866,4.48585527 6.20453451,4.17470988 6.39623299,3.9830114 L8.68392511,1.69531929 L7.33453449,1.69604858 C7.06370829,1.69599648 6.84356759,1.47585578 6.8435155,1.20502958 C6.84424478,0.933422006 7.0636562,0.714010592 7.33453449,0.714010592 L9.86875717,0.713333396 C9.93267402,0.713281304 9.99586159,0.725106183 10.055559,0.750110333 C10.1153085,0.775062391 10.1701614,0.810537028 10.2166795,0.857055165 C10.2631976,0.903573302 10.2986723,0.958426156 10.3229471,1.01749846 C10.3479513,1.07719587 10.3605054,1.14111273 10.3604534,1.20502958 Z"
              id="Fill-48"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};

ExpandIcon.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  fill: PropTypes.string
};

ExpandIcon.defaultProps = {
  height: 24,
  width: 24
};

export default ExpandIcon;