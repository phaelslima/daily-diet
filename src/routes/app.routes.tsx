import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator()

import { Home } from '@screens/Home'
import { NewMeal } from '@screens/NewMeal'
import { Statistics } from '@screens/Statistics'

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="new" component={NewMeal} />
      <Screen name="statistics" component={Statistics} />
    </Navigator>
  )
}
