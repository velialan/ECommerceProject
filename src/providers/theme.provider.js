import { createContext, useContext, useEffect, useState } from 'react'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as baseTheme from '../theme/theme'
import { get, merge } from 'lodash'
 
export const ThemeContext = createContext({
  mode:'',
  theme:{},
  toggleTheme:()=>{}
})

const modes = [
  'light',
  'dark',
  // more than two modes can follow...
]
export const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState(modes[0])
  const [theme, setTheme] = useState(baseTheme)

  useEffect(() => { 
    getTheme()
  }, [])

  useEffect(() => {
    setTheme(getThemeFunc(mode))
  }, [mode])

  const getTheme = async () => {
    try {
      const themeValue = await AsyncStorage.getItem('@theme')
      if (themeValue) setMode(themeValue)
    } catch (error) {
      console.log(error)
    }
  }

  const toggleTheme = async () => {
    const themeValue = mode === 'dark' ? 'light' : 'dark'
    try {
      await AsyncStorage.setItem('@theme', themeValue)
      setMode(themeValue)
    } catch (error) {
      console.log(error)
    }
  }
  const getThemeFunc = mode =>
    merge({}, baseTheme, {
      colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
    })
  return (
    <ThemeContext.Provider
      value={{
        mode,
        theme,
        toggleTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  )
}
export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeContextProvider')
  }
  return context
}

export default useTheme