import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Trash = (props: SvgProps) => (
  <Svg
    fillRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit={2}
    clipRule="evenodd"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}>
    <Path
      fill="#FF0000"
      fillRule="nonzero"
      d="M4.015 5.494h-.253a.747.747 0 0 1 0-1.494h5.253V3c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254a.747.747 0 0 1 0 1.494h-.254v15.435c0 .591-.448 1.071-1 1.071h-14c-.552 0-1-.48-1-1.071zm14.5 0h-13V20.5h13zM14.265 8a.75.75 0 0 0-.75.75v8.5a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-.75-.75zm-4.5 0a.75.75 0 0 0-.75.75v8.5a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-.75-.75zm3.75-4v-.5h-3V4z"
    />
  </Svg>
);
export default Trash;
