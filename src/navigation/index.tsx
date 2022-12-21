import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import BottomTab from './BottomTab'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {AuthStackScreens} from './stacks'
import useTheme from '../providers/theme.provider'
import {ThemeProvider} from 'styled-components'
import useAuth from '../providers/auth.provider'
const Stack = createNativeStackNavigator()

const Navigation = () => {
  const {theme} = useTheme()
  const {state} = useAuth()

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Auth' screenOptions={{headerShown: false}}>
            {state.userToken == null ? (
              <Stack.Screen name='Auth' component={AuthStackScreens} />
            ) : (
              <Stack.Screen name='BottomTab' component={BottomTab} />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}

export default Navigation
