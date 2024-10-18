import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HomeSvg(props) {
    return (
        <Svg
            width={27}
            height={27}
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M1 13.755c0-2.86 0-4.29.649-5.477.649-1.185 1.835-1.921 4.206-3.393l2.5-1.551C10.862 1.778 12.115 1 13.5 1c1.385 0 2.638.778 5.145 2.334l2.5 1.551c2.371 1.472 3.557 2.208 4.206 3.393C26 9.464 26 10.894 26 13.755v1.901c0 4.876 0 7.314-1.465 8.83C23.072 26 20.714 26 16 26h-5c-4.714 0-7.071 0-8.536-1.515C1 22.97 1 20.532 1 15.656v-1.901z"
                stroke={props.color || "#797A7C"}
                strokeWidth={1.5}
            />
            <Path
                d="M17.25 21h-7.5"
                stroke={props.color || "#797A7C"}
                strokeWidth={1.5}
                strokeLinecap="round"
            />
        </Svg>
    )
}

export default HomeSvg
