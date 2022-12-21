import React from 'react'
import {Provider} from 'react-redux'
import Navigation from './src/navigation'
import {AuthProvider} from './src/providers/auth.provider'
import {ThemeContextProvider} from './src/providers/theme.provider'
import store from './src/store/store'

type Props = {}

const App = (props: Props) => {
  return ( 
    <Provider store={store}>
      <AuthProvider>
        <ThemeContextProvider>
          <Navigation />
        </ThemeContextProvider>
      </AuthProvider>
    </Provider>
  )
}

export default App
