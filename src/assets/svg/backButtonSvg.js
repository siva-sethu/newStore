import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BackButtonSvg(props) {
  return (
    <Svg
      width={26}
      height={27}
      viewBox="0 0 26 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12.6 23.8c-5.744 0-10.4-4.656-10.4-10.4C2.2 7.656 6.856 3 12.6 3 18.344 3 23 7.656 23 13.4c0 5.744-4.656 10.4-10.4 10.4z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.498 9.026l-3.182 3.077c-.165.153-.297.34-.387.548a1.672 1.672 0 00.387 1.875l3.182 3.076"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default BackButtonSvg
