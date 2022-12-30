import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function Help(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={12} cy={12} r={9} stroke="#000" strokeWidth={1.5} />
      <Circle cx={12} cy={18} r={0.5} fill="#000" stroke="#000" />
      <Path
        d="M12 16v-1.419c0-.944.604-1.782 1.5-2.081v0a2.194 2.194 0 001.5-2.081v-.513C15 8.3 13.7 7 12.094 7H12a3 3 0 00-3 3v0"
        stroke="#000"
        strokeWidth={1.5}
      />
    </Svg>
  );
}

export default Help;
