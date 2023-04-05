import { useCallback, useState } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

import { mealsGetAll } from '@storage/meal/mealsGetAll'

import { Container, Description, Icon, Percent } from './styles'

export function PercentResume() {
  const navigation = useNavigation()

  const [percent, setPercent] = useState(0)
  const type = percent >= 0.5 ? 'INSIDE' : 'OUTSIDE'

  async function fetchMeals() {
    const mealList = await mealsGetAll()

    const total = mealList.length
    const onDiet = mealList.filter((meal) => meal.isOnDiet).length

    const result = onDiet / total

    setPercent(result)
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals()
    }, [])
  )

  return (
    <Container
      activeOpacity={0.8}
      type={type}
      onPress={() => navigation.navigate('statistics')}
    >
      <Icon type={type} />
      <Percent>
        {(percent || 0).toLocaleString('pt-BR', {
          style: 'percent',
          minimumFractionDigits: 2,
        })}
      </Percent>
      <Description>das refeições dentro da dieta</Description>
    </Container>
  )
}
