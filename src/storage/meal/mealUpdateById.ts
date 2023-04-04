import AsyncStorage from '@react-native-async-storage/async-storage'

import { MEAL_COLLECTION } from '@storage/storageConfig'

import { mealsGetAll } from './mealsGetAll'
import { MealStorageDTO } from './MealStorageDTO'

export async function mealUpdateById(newMeal: MealStorageDTO) {
  try {
    const storedMeals = await mealsGetAll()

    const meals = storedMeals.map((meal) => {
      if (meal.id === newMeal.id) return newMeal

      return meal
    })

    const storage = JSON.stringify(meals)

    await AsyncStorage.setItem(MEAL_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}
