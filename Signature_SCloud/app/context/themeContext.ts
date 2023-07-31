import React from "react"

export const PreferencesContext = React.createContext({
  toggleTheme: (value: boolean) => {},
  setDefaultSystem: (value: boolean) => {},
  isThemeDark: false,
  isDefaultSystem: false,
})
