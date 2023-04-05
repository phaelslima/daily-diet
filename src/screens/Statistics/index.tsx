import { useCallback, useState } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import { LinearGradient } from 'expo-linear-gradient'

import { useTheme } from 'styled-components/native'

import { StatisticCard } from '@components/StatisticCard'

import { mealsGetAll } from '@storage/meal/mealsGetAll'
import { toTimestamp } from '@utils/toTimestamp'

import {
  Button,
  Container,
  Content,
  ContentTitle,
  Description,
  Header,
  Icon,
  Row,
  Title,
} from './styles'

export function Statistics() {
  const navigation = useNavigation()
  const theme = useTheme()

  const [visible, setVisible] = useState(false)

  const [percent, setPercent] = useState(0)
  const type = percent >= 0.5 ? 'INSIDE' : 'OUTSIDE'

  const [total, setTotal] = useState(0)
  const [onDiet, setOnDiet] = useState(0)
  const [offDiet, setOffDiet] = useState(0)
  const [bestSequence, setBestSequence] = useState(0)

  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)

  async function calculateStatistics() {
    setVisible(false)
    const mealList = await mealsGetAll()
    setVisible(true)

    const total = mealList.length
    const onDiet = mealList.filter((meal) => meal.isOnDiet).length
    const offDiet = mealList.filter((meal) => !meal.isOnDiet).length

    setTotal(total)
    setOnDiet(onDiet)
    setOffDiet(offDiet)

    const result = onDiet / total

    setPercent(result)

    let bestSequence = 0,
      currentSequence = 0

    mealList.sort(function (a, b) {
      const dateA = a.date.replaceAll('/', '.')
      const dateB = b.date.replaceAll('/', '.')

      return toTimestamp(dateA) < toTimestamp(dateB)
        ? 1
        : toTimestamp(dateA) > toTimestamp(dateB)
        ? -1
        : 0
    })

    mealList.map((meal) => {
      if (meal.isOnDiet) {
        currentSequence++
      } else {
        if (currentSequence >= bestSequence) {
          bestSequence = currentSequence
        }
        currentSequence = 0
      }
    })

    if (currentSequence > bestSequence) {
      bestSequence = currentSequence
    }

    setBestSequence(bestSequence)
  }

  function handleGoBack() {
    navigation.goBack()
  }

  useFocusEffect(
    useCallback(() => {
      calculateStatistics()
    }, [])
  )

  return (
    <Container type={visible ? type : 'DEFAULT'}>
      <Header>
        <Button onPress={handleGoBack}>
          <Icon />
        </Button>
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
          <Title>
            {(percent || 0).toLocaleString('pt-BR', {
              style: 'percent',
              minimumFractionDigits: 2,
            })}
          </Title>
        </ShimmerPlaceholder>
        <Description>das refeições dentro da dieta</Description>
      </Header>

      <Content>
        <ContentTitle>Estatísticas gerais</ContentTitle>

        <StatisticCard
          visible={visible}
          title={bestSequence}
          description="melhor sequência de pratos dentro da dieta"
        />

        <StatisticCard
          visible={visible}
          title={total}
          description="refeições registradas"
        />

        <Row>
          <StatisticCard
            visible={visible}
            title={onDiet}
            description="refeições dentro da dieta"
            style={{
              marginRight: 6,
              backgroundColor: theme.COLORS.GREEN_LIGHT,
            }}
            shimmerColors={[theme.COLORS.GREEN_LIGHT, theme.COLORS.GREEN_MID]}
          />
          <StatisticCard
            visible={visible}
            title={offDiet}
            description="refeições fora da dieta"
            style={{ marginLeft: 6, backgroundColor: theme.COLORS.RED_LIGHT }}
            shimmerColors={[theme.COLORS.RED_LIGHT, theme.COLORS.RED_MID]}
          />
        </Row>
      </Content>
    </Container>
  )
}
