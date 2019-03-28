import React from "react";
import Svg, { G, Path } from "react-native-svg";

const CollageIconSvg = props => {
  return (
    <Svg height={props.height} width={props.width} viewBox="0 0 20 21">
      <G
        stroke="none"
        fill="none"
        fillRule="evenodd"
        transform={{ translate: "-178,  -204" }}
      >
        <Path
          d="M180.600948,204 L195.399052,204 C196.835516,204 198,205.17405 198,206.617204 L198,222.382796 C198,223.828238 196.833243,225 195.399052,225 L180.600948,225 C179.164484,225 178,223.82595 178,222.382796 L178,206.617204 C178,205.171762 179.166757,204 180.600948,204 Z M179.73913,221.507796 C179.73913,222.468609 180.515199,223.25 181.470513,223.25 L194.529487,223.25 C195.484333,223.25 196.26087,222.469081 196.26087,221.507796 L196.26087,207.492204 C196.26087,206.531391 195.484801,205.75 194.529487,205.75 L181.470513,205.75 C180.515667,205.75 179.73913,206.530919 179.73913,207.492204 L179.73913,221.507796 Z M187.565217,204.875 L189.304348,204.875 L189.304348,224.125 L187.565217,224.125 L187.565217,204.875 Z M189.304348,213.625 L197.130435,213.625 L197.130435,215.375 L189.304348,215.375 L189.304348,213.625 Z"
          fill={props.fill}
          fillRule="nonzero"
        />
      </G>
    </Svg>
  );
};

CollageIconSvg.defaultProps = {
  fill: "black",
  height: 24,
  width: 24
};

export default CollageIconSvg;