import { useCallback, useState } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import { LinearGradient } from 'expo-linear-gradient'

import { useTheme } from 'styled-components/native'

import { mealsGetAll } from '@storage/meal/mealsGetAll'

import { Container, Description, Icon, Percent } from './styles'

export function PercentResume() {
  const navigation = useNavigation()

  const theme = useTheme()

  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)

  const [visible, setVisible] = useState(false)

  const [percent, setPercent] = useState(0)
  const type = percent >= 0.5 ? 'INSIDE' : 'OUTSIDE'

  async function fetchMeals() {
    setVisible(false)
    const mealList = await mealsGetAll()
    setVisible(true)

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
      type={visible ? type : 'DEFAULT'}
      onPress={() => navigation.navigate('statistics')}
    >
      <Icon type={visible ? type : 'DEFAULT'} />
      <ShimmerPlaceholder
        visible={visible}
        height={36}
        width={140}
        location={[0.3, 1]}
        shimmerColors={
          !visible
            ? [theme.COLORS.GRAY_500, theme.COLORS.GRAY_400]
            : type === 'INSIDE'
            ? [theme.COLORS.GREEN_LIGHT, theme.COLORS.GREEN_MID]
            : [theme.COLORS.RED_LIGHT, theme.COLORS.RED_MID]
        }
        shimmerStyle={[{ borderRadius: 16, marginBottom: 6 }]}
      >
        <Percent>
          {(percent || 0).toLocaleString('pt-BR', {
            style: 'percent',
            minimumFractionDigits: 2,
          })}
        </Percent>
      </ShimmerPlaceholder>
      <Description>das refeições dentro da dieta</Description>
    </Container>
  )
}
