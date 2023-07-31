import * as React from "react"
import { View, ImageStyle } from "react-native"
import { AutoImage as Image } from "../auto-image/auto-image"
import { IconProps } from "./icon.props"
import { icons } from "./icons"
import { sizeIcon } from "@app/theme/size"
import R from "@app/assets/index"

const ROOT: ImageStyle = {
  resizeMode: "contain",
  height: sizeIcon.large,
  width: sizeIcon.large,
}

export function Icon(props: IconProps) {
  const { style: styleOverride, icon, containerStyle, size = sizeIcon.large } = props
  const styleSize = { width: size, height: size }
  return (
    <View style={containerStyle}>
      <Image
        style={[ROOT, { tintColor: R.colors.textTitle }, styleSize, styleOverride]}
        source={icons[icon]}
      />
    </View>
  )
}
