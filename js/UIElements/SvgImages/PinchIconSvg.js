import React from "react";
import Svg, { G, Path, Polyline, Circle } from "react-native-svg";

const PinchIconSvg = props => {
  return (
    <Svg height={props.height} width={props.width} viewBox="0 0 19 21">
      <G
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <G>
          <G>
            <Polyline
              id="Path"
              stroke={props.stroke}
              points="0.533333333 4.46666667 2.6 4.46666667 2.6 6.53333333"
            />
            <Polyline
              id="Path"
              stroke={props.stroke}
              points="4.66666667 0.333333333 4.66666667 2.4 6.66666667 2.4"
            />
            <Circle
              id="Oval"
              stroke={props.stroke}
              fill={props.fill}
              cx="4.33333333"
              cy="9.26666667"
              r="2.06666667"
            />
            <Circle
              id="Oval"
              stroke={props.stroke}
              fill={props.fill}
              cx="9.53333333"
              cy="4.06666667"
              r="2.06666667"
            />
            <G
              id="Group"
              transform={{ translate: "4.000000, 3.333333" }}
              fill={props.fill}
            >
              <Path
                d="M4.93333333,8.4 C4.93333333,8.4 5.26666667,5.86666667 6.26666667,5.13333333 C7.2,4.46666667 7.6,5.46666667 7.6,5.46666667"
                id="Path"
                stroke={props.stroke}
              />
              <Path
                d="M10.4,6.46666667 C10.5333333,3.33333333 9.46666667,1.33333333 8.4,0.866666667 C7.6,0.466666667 6,-0.0666666667 5.33333333,0.666666667 C4.4,1.66666667 6.73333333,2.26666667 7.33333333,2.6 C7.93333333,2.93333333 7.86666667,5.33333333 7.06666667,7.86666667 C6.26666667,10.4 3.73333333,7.8 2.53333333,6.4 C1.93333333,5.66666667 1.2,5.66666667 0.6,5.8 C0.2,5.93333333 0.0666666667,6.46666667 0.333333333,6.73333333 C0.6,7 0.933333333,7.4 1,7.66666667 C1.13333333,8.2 2.13333333,9.6 2.6,9.93333333 C3,10.2666667 6.26666667,14.2 6.8,14.8 C7.26666667,15.4 7.4,16.2666667 7.4,16.2666667 L13.5333333,14.4 C13.5333333,14.4 12.9333333,13.3333333 13.7333333,11.1333333 C14.5333333,8.93333333 13.9333333,8.53333333 13.3333333,7.33333333 C12.7333333,6.13333333 11.6,3 10.4,4.4"
                id="Path"
                stroke="#10ACBD"
              />
            </G>
            <Path
              d="M4.66666667,2.4 L6.66666667,0.333333333"
              id="Path"
              stroke={props.stroke}
            />
            <Path
              d="M2.6,4.46666667 L0.533333333,6.53333333"
              id="Path"
              stroke={props.stroke}
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};

PinchIconSvg.defaultProps = {
  fill: "#FFFFFF",
  height: 19,
  width: 21,
  stroke: "#2DADBA"
};

export default PinchIconSvg;
