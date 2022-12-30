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
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19 2a3.004 3.004 0 012.995 2.824L22 5v10a3.004 3.004 0 01-2.824 2.995L19 18h-3.5l-2.7 3.6a1 1 0 01-1.524.09l-.076-.09L8.5 18H5a3.004 3.004 0 01-2.995-2.824L2 15V5a3.004 3.004 0 012.824-2.995L5 2h14zm0 2H5c-.512 0-.935.387-.993.884L4 5v10c0 .512.387.935.884.993L5 16h4a1 1 0 01.724.31l.076.09 2.2 2.933 2.2-2.933a.999.999 0 01.683-.393L15 16h4c.512 0 .935-.387.993-.884L20 15V5c0-.512-.387-.935-.884-.993L19 4zm-2 7a1 1 0 01.117 1.993L17 13H7a1 1 0 01-.117-1.993L7 11h10zm0-4a1 1 0 01.117 1.993L17 9H7a1 1 0 01-.117-1.993L7 7h10z"
          fill="#fff"
        />
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
