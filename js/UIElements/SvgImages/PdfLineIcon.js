import PropTypes from "prop-types";
import React from "react";
import Svg, { G, Path, Rect } from "react-native-svg";

const PdfLineIcon = props => {
  return (
    <Svg viewBox="0 0 16 16" width={props.width} height={props.height}>
      <G
        id="Assessment"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <G id="Group-58">
          <Rect
            id="Rectangle-Copy-22"
            x="0"
            y="0"
            width={props.width}
            height={props.height}
          />
          <Path
            d="M3.14099839,13.1554916 C2.15899839,14.2343016 1.65209839,14.4811116 1.48229839,14.5381716 C1.34159839,14.3497416 1.36949839,14.2634916 1.37879839,14.2343016 C1.46239839,13.9848316 1.97719839,13.5695016 3.14099839,13.1554916 M6.56979839,10.9620616 C7.42169839,9.72136156 8.26429839,8.35196156 8.97819839,7.05022156 C9.38419839,8.31613156 9.90179839,9.56478156 10.4590984,10.6197016 C9.18789839,10.6528816 7.85429839,10.7709816 6.56979839,10.9620616 Z M9.51829839,3.01233156 C9.50629839,2.26526156 9.60049839,1.72254156 9.79289839,1.44787156 C9.81019839,1.42664156 9.82209839,1.41071156 9.83409839,1.39877156 C9.84469839,1.61506156 9.81149839,2.09276156 9.51829839,3.01233156 M14.5513984,12.4137316 C14.5274984,12.4429316 14.4955984,12.4747716 14.4544984,12.5106016 C14.3270984,12.6273716 14.2036984,12.6844316 14.0815984,12.6844316 C14.0457984,12.6844316 14.0099984,12.6804516 13.9674984,12.6711616 C13.7219984,12.6167616 13.4181984,12.4084316 13.0943984,12.0753616 C13.3875984,12.1085416 13.6503984,12.1483416 13.8759984,12.1961116 C14.2328984,12.2744016 14.4385984,12.3566716 14.5513984,12.4137316 M14.1638984,10.8598816 C13.5879984,10.7351516 12.8700984,10.6568616 12.0287984,10.6263416 C11.1556984,9.15874156 10.3621984,7.16434156 9.89779839,5.26681156 C11.5232984,1.84728156 11.1078984,0.996711557 10.9526984,0.675591557 C10.7894984,0.338541557 10.5001984,0.110311557 10.1352984,0.0320215573 C9.98399839,-0.00115844268 9.82209839,-0.00911844268 9.65629839,0.0107915573 C9.22239839,0.0585615573 8.85609839,0.278831557 8.59469839,0.645071557 C7.89139839,1.64027156 8.12629839,3.60946156 8.45409839,5.10492156 C7.45089839,7.12719156 6.02709839,9.44271156 4.63509839,11.3176816 C1.96659839,11.9121516 0.435298395,12.7468016 0.0809983947,13.7990616 C-0.0530016053,14.2011316 -0.0862016053,14.8247916 0.509598395,15.5108216 C0.680798395,15.7085316 0.903698395,15.8412316 1.15449839,15.8956316 C1.24079839,15.9142116 1.33099839,15.9235016 1.42129839,15.9235016 C1.96269839,15.9235016 2.57039839,15.5997316 3.33469839,14.9044116 C3.94909839,14.3444416 4.64969839,13.5522516 5.41799839,12.5504116 C7.20939839,12.1921316 9.36429839,11.9785016 11.1941984,11.9785016 L11.2697984,11.9785016 C12.0739984,13.1541716 12.8846984,13.8375416 13.6781984,14.0087216 C14.2885984,14.1414116 14.8857984,13.9662616 15.3753984,13.5230616 C15.8941984,13.0506716 16.0919984,12.5597016 15.9605984,12.0660716 C15.8026984,11.4808916 15.2147984,11.0867916 14.1638984,10.8598816 Z"
            id="pdf-copy"
            fill={props.fill}
          />
        </G>
      </G>
    </Svg>
  );
};

PdfLineIcon.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  fill: PropTypes.string
};

PdfLineIcon.defaultProps = {
  height: 24,
  width: 24,
  fill: "#000000"
};

export default PdfLineIcon;
