import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SettingsSvg(props) {
    return (
        <Svg
            width={30}
            height={29}
            viewBox="0 0 30 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M16.992 2.19C16.532 2 15.95 2 14.785 2c-1.165 0-1.747 0-2.207.19a2.5 2.5 0 00-1.352 1.353c-.116.28-.162.605-.18 1.08-.025.697-.383 1.342-.987 1.69-.604.35-1.342.336-1.958.01-.42-.221-.724-.345-1.025-.384a2.5 2.5 0 00-1.848.495c-.394.303-.686.807-1.268 1.816s-.874 1.513-.938 2.006a2.5 2.5 0 00.495 1.848c.184.24.443.442.845.695.59.371.97 1.003.97 1.701 0 .698-.38 1.33-.97 1.701-.402.253-.661.454-.845.695a2.5 2.5 0 00-.496 1.848c.065.493.357.997.939 2.006s.874 1.513 1.268 1.816a2.5 2.5 0 001.848.495c.3-.04.605-.163 1.024-.384.617-.326 1.355-.34 1.959.01.604.348.962.993.988 1.69.017.475.063.8.179 1.08a2.5 2.5 0 001.352 1.353c.46.19 1.042.19 2.207.19 1.165 0 1.747 0 2.207-.19a2.5 2.5 0 001.353-1.353c.116-.28.161-.605.179-1.08.026-.697.383-1.342.988-1.69.604-.35 1.341-.337 1.958-.01.42.221.724.345 1.024.384a2.5 2.5 0 001.848-.495c.395-.303.686-.807 1.268-1.816.583-1.009.874-1.513.939-2.006a2.5 2.5 0 00-.495-1.849c-.184-.24-.444-.442-.845-.694-.591-.371-.971-1.004-.971-1.701 0-.698.38-1.33.97-1.701.403-.253.662-.454.846-.695a2.5 2.5 0 00.495-1.848c-.065-.493-.356-.997-.939-2.006-.582-1.009-.873-1.513-1.268-1.816a2.5 2.5 0 00-1.848-.495c-.3.04-.604.163-1.024.385-.617.325-1.354.339-1.958-.01-.605-.35-.962-.994-.988-1.692-.018-.474-.063-.8-.18-1.079a2.5 2.5 0 00-1.352-1.353z"
                stroke={props.color || "#2A9D8F"}
                strokeWidth={1.5}
            />
            <Path
                d="M15 18.125c2.071 0 3.75-1.623 3.75-3.625s-1.679-3.625-3.75-3.625c-2.071 0-3.75 1.623-3.75 3.625s1.679 3.625 3.75 3.625z"
                stroke={props.color || "#2A9D8F"}
                strokeWidth={1.5}
            />
        </Svg>
    )
}

export default SettingsSvg
