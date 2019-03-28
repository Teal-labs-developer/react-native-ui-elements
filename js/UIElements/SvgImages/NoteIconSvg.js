import React from "react";
import PropTypes from "prop-types";
import Svg, { G, Path } from "react-native-svg";

const NoteIconSvg = props => {
  return (
    <Svg height={props.height} width={props.width} viewBox="0 0 21 24">
      <G
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        transform={{ translate: "-178,  -349" }}
      >
        <Path
          d="M196.644018,352.847019 L188.505933,360.848931 C188.349379,361.001031 188.156051,361.104981 187.942428,361.148931 L186.306694,361.494982 L186.603781,359.816929 C186.642386,359.591029 186.750265,359.388979 186.917043,359.226978 L195.02049,351.252966 C195.236096,351.044916 195.51884,350.930916 195.820047,350.930916 C196.129189,350.930916 196.407966,351.048966 196.646002,351.282966 C197.083469,351.714967 197.081333,352.416968 196.644018,352.847019 M198.049804,349.842964 C198.658169,350.438915 198.993861,351.227016 198.999964,352.058917 C199.003931,352.889019 198.678463,353.67097 198.082305,354.258971 L189.940253,362.262983 C189.506905,362.687034 188.963695,362.976984 188.365553,363.101035 L185.049375,363.779036 C184.786925,363.779036 184.538666,363.678985 184.347474,363.498985 C184.103335,363.266935 183.993472,362.936934 184.050387,362.609034 L184.599701,359.478979 C184.70758,358.847028 185.014738,358.271027 185.478603,357.812926 L193.586171,349.842964 C194.73149,348.719012 196.912571,348.719012 198.049804,349.842964 Z M193.873187,363.189985 C194.424485,363.189985 194.872176,363.659935 194.872176,364.239986 C194.872176,364.292036 194.849745,364.334036 194.843642,364.383987 L194.872176,364.383987 L194.872176,368.433993 C194.872176,368.738043 194.843642,369.035944 194.790694,369.317944 C194.446915,371.235997 193.016715,372.68605 191.228394,372.928 C191.183533,372.934 191.142945,372.94195 191.102204,372.952 C191.033082,372.964 190.963807,372.97795 190.890566,372.98395 C190.864168,372.994 190.813356,373 190.729891,373 L182.144268,373 C182.058819,373 182.008008,372.994 181.98161,372.98395 C181.908368,372.97795 181.83711,372.964 181.769972,372.952 C181.729231,372.94195 181.686506,372.934 181.645918,372.92605 C179.857596,372.68605 178.42526,371.235997 178.081482,369.317944 C178.028534,369.026044 178,368.727993 178,368.433993 L178,354.284021 C178,353.98402 178.028534,353.68402 178.083465,353.396019 C178.42938,351.458016 179.883994,350.006014 181.69673,349.779964 C181.733351,349.778014 181.769972,349.769914 181.806593,349.761964 C181.861524,349.751914 181.914472,349.739914 181.971387,349.736014 C181.999921,349.724014 182.052716,349.715914 182.142284,349.715914 L186.43502,349.715914 C187.043385,349.715914 187.537767,350.186014 187.537767,350.765915 C187.537767,351.345966 187.043385,351.815917 186.43502,351.815917 L186.43502,351.849967 L182.205303,351.851917 C181.33464,351.896017 180.604206,352.425968 180.252187,353.265969 C180.107839,353.60992 180.036581,353.94397 180.036581,354.284021 L180.036581,368.433993 C180.036581,369.752045 180.966295,370.799947 182.203319,370.868047 L186.43502,370.871947 L190.672976,370.868047 C191.905881,370.799947 192.835594,369.752045 192.835594,368.433993 L192.835594,364.383987 L192.902733,364.383987 C192.896629,364.334036 192.874199,364.292036 192.874199,364.239986 C192.874199,363.659935 193.32189,363.189985 193.873187,363.189985 Z"
          fill={props.fill}
        />
      </G>
    </Svg>
  );
};

NoteIconSvg.defaultProps = {
  fill: "black",
  height: 24,
  width: 24
};

export default NoteIconSvg;