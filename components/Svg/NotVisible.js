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
      <G clipPath="url(#clip0_1_2)">
        <G clipPath="url(#clip1_1_2)">
          <Path
            d="M9.342 18.782l-1.931-.518.787-2.939a10.988 10.988 0 01-3.237-1.872l-2.153 2.154-1.415-1.415 2.154-2.153a10.957 10.957 0 01-2.371-5.07l1.968-.359C3.903 10.812 7.579 14 12 14c4.42 0 8.097-3.188 8.856-7.39l1.968.358a10.957 10.957 0 01-2.37 5.071l2.153 2.153-1.415 1.415-2.153-2.154a10.988 10.988 0 01-3.237 1.872l.787 2.94-1.931.517-.788-2.94a11.07 11.07 0 01-3.74 0l-.788 2.94z"
            fill="#000"
          />
        </G>
      </G>
      <Defs>
        <ClipPath id="clip0_1_2">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
        <ClipPath id="clip1_1_2">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
