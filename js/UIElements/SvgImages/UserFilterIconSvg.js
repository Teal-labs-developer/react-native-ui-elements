import React from "react";
import Svg, { G, Path } from "react-native-svg";
import { colors } from "js/UIElements/colors";

const UserFilterIconSvg = props => {
  return (
    <Svg width={props.width} height={props.height} viewBox="0 0 16 16">
      <G fill={props.fill} strokeWidth="1">
        <Path
          d="M7.1,4.2c0.6,0,1.1-0.2,1.5-0.6C9,3.2,9.2,2.7,9.2,2.1S9,1,8.6,0.6c-0.7-0.8-2.2-0.8-2.9,0c-0.8,0.8-0.8,2.2,0,3
	C6,3.9,6.6,4.2,7.1,4.2z M6.2,1.2c0.3-0.3,0.6-0.4,0.9-0.4c0.3,0,0.6,0.1,0.9,0.4c0.2,0.2,0.4,0.5,0.4,0.9C8.4,2.4,8.3,2.7,8,3
	C7.8,3.2,7.4,3.3,7.1,3.3c-0.3,0-0.6-0.1-0.9-0.4C5.8,2.4,5.8,1.7,6.2,1.2z"
        />
        <Path
          d="M7.1,6.4c1,0,1.9,0.4,2.6,1.1c0.1,0.1,0.4,0.1,0.6,0c0.1-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.2-0.1-0.3C9.4,6,8.3,5.6,7.1,5.6H7
	c-2.5,0-4.5,2-4.5,4.4v4.3c0,0.2,0.2,0.4,0.4,0.4c0.2,0,0.4-0.2,0.4-0.4V10C3.3,8,5,6.4,7.1,6.4L7.1,6.4z"
        />
        <Path
          d="M13.5,9.5c-0.1-0.1-0.2-0.2-0.3-0.2H6.9c-0.2,0-0.3,0.1-0.4,0.2c0,0.1,0,0.3,0.1,0.4L9,13.3V15c0,0.1,0.1,0.3,0.2,0.3
	l1.3,0.7c0.1,0,0.1,0,0.2,0c0.1,0,0.1,0,0.2-0.1c0.1-0.1,0.2-0.2,0.2-0.3v-2.4l2.4-3.4C13.5,9.7,13.5,9.6,13.5,9.5z M10.4,12.9
	c0,0.1-0.1,0.1-0.1,0.2V15l-0.7-0.3v-1.6c0-0.1,0-0.1-0.1-0.2l-2-2.9h4.9L10.4,12.9z"
        />
      </G>
    </Svg>
  );
  //   return (
  //     <Svg
  //       width={props.width}
  //       height={props.height}
  //       viewBox="0 0 100 100"
  //       version="1.1"
  //     >
  //       <G id="Icon" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
  //         <Path
  //           d="M39.6666667,46.6666667 C52.5533108,46.6666667 63,36.2199775 63,23.3333333 C63,10.4466892 52.5533108,1.56852701e-15 39.6666667,0 C26.7800225,-1.56852701e-15 16.3333333,10.4466892 16.3333333,23.3333333 C16.345503,36.2149333 26.7850667,46.654497 39.6666667,46.6666667 Z M39.6666667,4.41501104 C50.1149676,4.41501104 58.584989,12.8850324 58.584989,23.3333333 C58.584989,33.7816342 50.1149676,42.2516556 39.6666667,42.2516556 C29.2183658,42.2516556 20.7483444,33.7816342 20.7483444,23.3333333 C20.7605089,12.8900753 29.2234086,4.42717559 39.6666667,4.41501104 Z"
  //           id="Shape"
  //           fill={props.fill}
  //           fillRule="nonzero"
  //         />
  //         <Path
  //           d="M95.8125609,50.0000132 L56.4389003,50.0000132 C55.2322646,50.003418 54.2549589,50.9584855 54.2514747,52.1376646 L54.2514747,54.8311053 C49.7554833,53.0210428 44.9395287,52.0913897 40.0769569,52.0949115 L40.0113342,52.0949115 C29.992925,52.116288 20.6963662,55.9213075 13.8059756,62.8472979 C6.80621375,69.8374178 2.97821897,79.3927194 3.00009323,89.7603284 C3.00357734,90.9395075 3.98088314,91.894575 5.18751882,91.8979798 L69.6290766,91.7910972 L69.6290766,97.8620271 C69.6270594,98.6007155 70.0159045,99.2879442 70.6571666,99.6790307 C71.0047137,99.8911092 71.4067731,100.00231 71.8165022,99.9996784 C72.1599012,100.005787 72.4990528,99.9247698 72.8008437,99.7645368 L81.4193005,95.5533636 C82.1552071,95.1914791 82.6203433,94.4559311 82.6223846,93.6508539 L82.6223846,79.7347436 L97.2343875,67.4860013 C97.7176833,67.0779153 97.9968313,66.4855581 97.9999865,65.8613863 L97.9999865,52.1376646 C98.0020299,51.5701143 97.7722259,51.0252333 97.3615602,50.6239122 C96.9508946,50.2225912 96.3933263,49.9980163 95.8125609,50.0000132 Z M93.6251353,54.2753159 L93.6251353,56.5198498 L58.6263259,56.5198498 L58.6263259,54.2753159 L93.6251353,54.2753159 Z M7.44056717,87.6013006 C7.89992655,79.2003307 11.2248134,71.5261624 16.9339942,65.8186332 C22.9931631,59.7263269 31.1960091,56.3702142 40.0113342,56.3702142 L40.0769569,56.3702142 C44.9833444,56.363901 49.8281422,57.4379438 54.2514747,59.5125617 L54.2514747,65.8613863 C54.25463,66.4855581 54.533778,67.0779153 55.0170737,67.4860013 L69.6290766,79.7347436 L69.6290766,87.5157945 L7.44056717,87.6013006 Z M79.0131324,77.1268089 C78.5298367,77.5348949 78.2506887,78.1272521 78.2475334,78.751424 L78.2475334,92.3255101 L74.0039278,94.3990319 L74.0039278,78.751424 C74.0007726,78.1272521 73.7216246,77.5348949 73.2383288,77.1268089 L58.6263259,64.8780666 L58.6263259,60.773776 L93.6251353,60.773776 L93.6251353,64.8780666 L79.0131324,77.1268089 Z"
  //           id="Shape"
  //           fill={props.fill}
  //           fillRule="nonzero"
  //         />
  //       </G>
  //     </Svg>
  //   );
};

UserFilterIconSvg.defaultProps = {
  fill: colors.steel,
  height: 20,
  width: 20
};

export default UserFilterIconSvg;