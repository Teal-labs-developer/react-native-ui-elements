
import React, { PropTypes } from 'react'
import Svg,{G,Path} from 'react-native-svg';

const PhotoClickButton = (props) => {
    return (
        <Svg width={props.width} height={props.height} viewBox="0 0 82 82" version="1.1">
            <G id="add-photos" stroke="none" stroke-width="1" fill="none" fillRule="evenodd" transform={{translate:'-147.000000,  -563.000000'}}>
                <Path d="M187.65,644.3 C165.199625,644.3 147,626.100375 147,603.65 C147,581.199625 165.199625,563 187.65,563 C210.100375,563 228.3,581.199625 228.3,603.65 C228.3,626.100375 210.100375,644.3 187.65,644.3 Z M187.65,641 C208.277835,641 225,624.277835 225,603.65 C225,583.022165 208.277835,566.3 187.65,566.3 C167.022165,566.3 150.3,583.022165 150.3,603.65 C150.3,624.277835 167.022165,641 187.65,641 Z" id="Oval-6-Copy" fill="#FFFFFF" fill-rule="nonzero"></Path>
            </G>
        </Svg>
    )
};

PhotoClickButton.defaultProps = {
  fill:'black',
  height:82,
  width:82
};

export default PhotoClickButton
