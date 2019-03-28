import React from "react";
import Svg, { G, Path } from "react-native-svg";

const AddWithCircleSvg = props => {
  return (
    <Svg width={props.width} height={props.height} viewBox="0 0 26 26">
      <G
        id="Hambergur_add-a-course"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
        transform={{ translate: "-326.000000, -209.000000" }}
      >
        <G
          id="Group-3"
          transform={{ translate: "327.000000, 210.000000" }}
          fill={props.fill}
        >
          <Path
            d="M17.4999975,11.49975 L12.5000025,11.49975 L12.5000025,6.50025 C12.5000025,6.22425 12.276,6 12,6 C11.724,6 11.4999975,6.22425 11.4999975,6.50025 L11.4999975,11.49975 L6.5000025,11.49975 C6.2240025,11.49975 6,11.724 6,12 C6,12.276 6.2240025,12.50025 6.5000025,12.50025 L11.4999975,12.50025 L11.4999975,17.499975 C11.4999975,17.775975 11.724,18 12,18 C12.276,18 12.5000025,17.775975 12.5000025,17.499975 L12.5000025,12.50025 L17.4999975,12.50025 C17.7759975,12.50025 18,12.276 18,12 C18,11.724 17.7759975,11.49975 17.4999975,11.49975 Z"
            id="Add_Simple"
            stroke={props.fill}
          />
          <Path
            d="M12,25 C4.82029825,25 -1,19.1797017 -1,12 C-1,4.82029825 4.82029825,-1 12,-1 C19.1797017,-1 25,4.82029825 25,12 C25,19.1797017 19.1797017,25 12,25 Z M12,23 C18.0751322,23 23,18.0751322 23,12 C23,5.92486775 18.0751322,1 12,1 C5.92486775,1 1,5.92486775 1,12 C1,18.0751322 5.92486775,23 12,23 Z"
            id="Oval-4"
            fill-rule="nonzero"
          />
        </G>
      </G>
    </Svg>
  );
};

AddWithCircleSvg.defaultProps = {
  fill: "#10ADBD",
  height: 26,
  width: 26
};

export default AddWithCircleSvg;
