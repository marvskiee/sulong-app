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
          <Path d="M23.082 9.858A.948.948 0 0024 8.911V5.286a.948.948 0 00-.948-.948H.948A.948.948 0 000 5.286v3.623c0 .523.424.947.948.947 1.182 0 2.143.962 2.143 2.144a2.146 2.146 0 01-2.143 2.144.948.948 0 00-.948.947v3.623c0 .524.424.948.948.948h22.104a.948.948 0 00.948-.948V15.09a.947.947 0 00-.918-.947A2.133 2.133 0 0121.006 12c0-1.165.912-2.106 2.076-2.142zM7.629 17.767H1.895v-1.84A4.046 4.046 0 004.987 12c0-1.9-1.32-3.5-3.092-3.927v-1.84H7.63v11.534zm12.623-2.953a4.02 4.02 0 001.853 1.088v1.865H9.524V6.233h12.58v1.865a4.02 4.02 0 00-1.852 1.088A4.016 4.016 0 0019.11 12c0 1.057.406 2.056 1.142 2.814z" />
          <Path d="M17.448 9.313H11.54a.948.948 0 000 1.895h5.909a.948.948 0 100-1.895zM17.448 12.792H11.54a.948.948 0 100 1.895h5.909a.948.948 0 000-1.895z" />
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
