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
      <G clipPath="url(#clip0_1_2)" fill="#000">
        <Path d="M9.155 21.136v.018a2.846 2.846 0 105.69 0v-.018h-5.69zM21.085 17.579l-2.56-3.762V9.123a6.526 6.526 0 00-5.246-6.398V1.279a1.28 1.28 0 00-2.558 0v1.446a6.526 6.526 0 00-5.245 6.398v4.694l-2.561 3.762a1.294 1.294 0 001.07 2.021h16.03a1.294 1.294 0 001.07-2.021z" />
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
