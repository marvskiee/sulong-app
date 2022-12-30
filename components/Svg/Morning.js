import * as React from "react";
import Svg, { Ellipse, Path } from "react-native-svg";

function Morning(props) {
  return (
    <Svg
      width={47}
      height={47}
      viewBox="0 0 47 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Ellipse cx={23.5} cy={23.5} rx={9.77778} ry={9.77777} fill="#F9BA71" />
      <Path
        d="M23.5 6.389V1.5M23.5 45.5v-4.889M35.6 11.4l3.456-3.457M7.944 39.057L11.4 35.6M40.611 23.5H45.5M1.5 23.5h4.889M35.6 35.6l3.456 3.457M7.944 7.943L11.4 11.4"
        stroke="#FFC42D"
        strokeOpacity={0.74}
        strokeWidth={2.5}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default Morning;
