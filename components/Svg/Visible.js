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
        <Path d="M23.168 11.655A12.75 12.75 0 0012 4.5 12.75 12.75 0 00.832 11.655L.652 12l.18.345A12.75 12.75 0 0012 19.5a12.75 12.75 0 0011.168-7.155l.18-.345-.18-.345zM18 12a6 6 0 11-12 0 6 6 0 0112 0zM2.355 12A12.352 12.352 0 015.46 8.332a7.5 7.5 0 000 7.335A12.353 12.353 0 012.355 12zm16.185 3.668a7.5 7.5 0 000-7.335A12.352 12.352 0 0121.645 12a12.352 12.352 0 01-3.105 3.668z" />
        <Path d="M12 15a3 3 0 100-5.999A3 3 0 0012 15zm0-4.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
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
