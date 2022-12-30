import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Afternoon(props) {
  return (
    <Svg
      width={56}
      height={44}
      viewBox="0 0 56 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.424 43.999L18.2 44C8.148 44 0 35.997 0 26.125S8.148 8.25 18.2 8.25c6.989 0 13.057 3.868 16.107 9.544 1.305 2.43 1.958 3.645 2.67 4.07.71.425 1.745.425 3.814.425h1.406c5.996 0 10.856 4.86 10.856 10.856C53.053 39.14 48.193 44 42.197 44H18.544l-.12-.001z"
        fill="#BED8FF"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M49.051 21.18C53.13 19.536 56 15.597 56 11c0-6.075-5.014-11-11.2-11-6.186 0-11.2 4.925-11.2 11a10.8 10.8 0 00.807 4.108c.4.57.772 1.16 1.11 1.773l.577 1.04a11.202 11.202 0 003.04 2.57c.404.009.894.009 1.507.009H46.4c.961 0 1.865.247 2.651.68z"
        fill="#F9BA71"
      />
    </Svg>
  );
}

export default Afternoon;
