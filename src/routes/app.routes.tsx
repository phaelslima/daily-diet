import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator()

import { Home } from '@screens/Home'
import { Statistics } from '@screens/Statistics'

import { NewMeal } from '@screens/NewMeal'
import { EditMeal } from '@screens/EditMeal'

import { Feedback } from '@screens/Feedback'
import { MealDetails } from '@screens/MealDetails'

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="new" component={NewMeal} />
      <Screen name="edit" component={EditMeal} />
      <Screen name="feedback" component={Feedback} />
      <Screen name="details" component={MealDetails} />
    </Navigator>
  )
}
