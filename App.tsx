import { ActivityIndicator, StatusBar } from 'react-native'

import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts,
} from '@expo-google-fonts/nunito-sans'

import { ThemeProvider } from 'styled-components/native'

import { Home } from '@screens/Home'

import { defaultTheme } from '@themes/default'

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

  return (
    <ThemeProvider theme={defaultTheme}>
      {fontsLoaded ? <Home /> : <ActivityIndicator />}

      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </ThemeProvider>
  )
}
