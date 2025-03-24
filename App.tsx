import React from 'react'
import { TamaguiProvider } from '@tamagui/core'
import { NavigationContainer } from '@react-navigation/native';
import Navigations from '@/navigations'
import {config} from './src/tamagui/config'

const App = () => {
  return (
    <TamaguiProvider config={config}>
      <NavigationContainer>
        <Navigations />
      </NavigationContainer>
    </TamaguiProvider>
  )
}

export default App