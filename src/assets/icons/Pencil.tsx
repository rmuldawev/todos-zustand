import * as React from 'react';
import Svg, {
  SvgProps,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
const Pencil = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
      <Path
        stroke="url(#a)"
        d="M16.617 3.752a2.567 2.567 0 1 1 3.631 3.631L7.993 19.638 3 21l1.362-4.993L16.617 3.752Z"
      />
      <Path stroke="url(#b)" d="m11.993 8.341 3.666 3.666" />
    </G>
    <Defs>
      <LinearGradient
        id="a"
        x1={3.545}
        x2={21}
        y1={19.364}
        y2={3.818}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="black" />
        <Stop offset={0.464} stopColor="black" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={11.461}
        x2={13.065}
        y1={9.095}
        y2={8.062}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#27F5CD" />
        <Stop offset={0.464} stopColor="black" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default Pencil;
