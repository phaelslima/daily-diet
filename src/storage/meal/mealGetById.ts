import { mealsGetAll } from './mealsGetAll'

export async function mealGetById(mealId: String) {
  try {
    const storedMeals = await mealsGetAll()

    const meal = storedMeals.find((meal) => meal.id === mealId)

    return meal
  } catch (error) {
    throw error
  }
}
