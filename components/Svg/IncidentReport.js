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
        <G clipPath="url(#clip1_1_2)" fill="#fff">
          <Path d="M7.57 4.615h1.476a.35.35 0 00.37-.369V3.138h5.169v1.108a.352.352 0 00.369.37h1.477a.35.35 0 00.369-.37V3.138A2.22 2.22 0 0014.585.923h-5.17A2.22 2.22 0 007.2 3.138v1.108a.35.35 0 00.37.37zM12 16.92a.825.825 0 10.83.826.813.813 0 00-.83-.826zM12.559 12.226h-1.104a.277.277 0 00-.277.277v3.586c0 .153.124.277.277.277h1.104a.277.277 0 00.276-.277v-3.586a.277.277 0 00-.277-.277z" />
          <Path d="M20.861 6.83H3.139A2.22 2.22 0 00.923 9.047v11.816a2.22 2.22 0 002.215 2.215h17.724a2.22 2.22 0 002.215-2.216V9.046a2.22 2.22 0 00-2.216-2.215zm-2.538 13.94H5.691c-.693 0-1.08-.887-.693-1.52l6.319-10.195a.785.785 0 011.384 0l6.31 10.21a.97.97 0 01-.688 1.504z" />
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
