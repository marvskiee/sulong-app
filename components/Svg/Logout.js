import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_1_2)" fill="#fff">
        <Path d="M18.75 1.5H12V3h6.75a.75.75 0 01.75.75v16.5a.75.75 0 01-.75.75H12v1.5h6.75A2.25 2.25 0 0021 20.25V3.75a2.25 2.25 0 00-2.25-2.25z" />
        <Path d="M16.185 12.75v-1.5H5.25l3-3-1.065-1.088-3.75 3.75a1.5 1.5 0 000 2.123l3.75 3.75L8.25 15.75l-3-3h10.935z" />
      </G>
      <Defs>
        <ClipPath id="clip0_1_2">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
