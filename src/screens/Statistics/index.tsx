import { useCallback, useState } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

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

  const [percent, setPercent] = useState(0)
  const type = percent >= 0.5 ? 'INSIDE' : 'OUTSIDE'

  const [total, setTotal] = useState(0)
  const [onDiet, setOnDiet] = useState(0)
  const [offDiet, setOffDiet] = useState(0)
  const [bestSequence, setBestSequence] = useState(0)

  async function calculateStatistics() {
    const mealList = await mealsGetAll()

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
    <Container type={type}>
      <Header>
        <Button onPress={handleGoBack}>
          <Icon />
        </Button>
        <Title>
          {(percent || 0).toLocaleString('pt-BR', {
            style: 'percent',
            minimumFractionDigits: 2,
          })}
        </Title>
        <Description>das refeições dentro da dieta</Description>
      </Header>
      <Content>
        <ContentTitle>Estatísticas gerais</ContentTitle>

        <StatisticCard
          title={bestSequence}
          description="melhor sequência de pratos dentro da dieta"
        />

        <StatisticCard title={total} description="refeições registradas" />

        <Row>
          <StatisticCard
            title={onDiet}
            description="refeições dentro da dieta"
            style={{
              marginRight: 6,
              backgroundColor: theme.COLORS.GREEN_LIGHT,
            }}
          />
          <StatisticCard
            title={offDiet}
            description="refeições fora da dieta"
            style={{ marginLeft: 6, backgroundColor: theme.COLORS.RED_LIGHT }}
          />
        </Row>
      </Content>
    </Container>
  )
}
