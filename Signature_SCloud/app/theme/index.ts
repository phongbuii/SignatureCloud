import { DefaultTheme as PaperDefaultTheme, Theme as PaperTheme } from "react-native-paper"
export * from "./color"
export * from "./spacing"
export * from "./typography"
export * from "./timing"
export * from "./lightmode"
export * from "./darkmode"
export * from "./baseStyles"
export * from './size'

export interface Theme extends PaperTheme {
  custom: {
    muted: string
  }
}

export const DefaultTheme: Theme = {
  ...PaperDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    //
  },
}
