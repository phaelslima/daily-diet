import { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import * as PhosphorIcons from 'phosphor-react-native'

import { Badge } from '@components/Badge'
import { Button } from '@components/Button'
import { Header } from '@components/Header'

import { mealGetById } from '@storage/meal/mealGetById'
import { mealRemoveById } from '@storage/meal/mealRemoveById'
import { MealStorageDTO } from '@storage/meal/MealStorageDTO'

import {
  ButtonControls,
  Container,
  Content,
  Description,
  Text,
  Label,
  Title,
} from './styles'

type Params = {
  id: string
}

export function MealDetails() {
  const navigation = useNavigation()
  const route = useRoute()

  const params = route.params as Params

  const [meal, setMeal] = useState<MealStorageDTO>()

  async function getMeal() {
    const meal = await mealGetById(params.id)
    setMeal(meal)
  }

  async function handleRemoveMeal() {
    try {
      await mealRemoveById(params.id)
      navigation.goBack()
    } catch (error) {
      Alert.alert('Remover Refeição', 'Não foi possível remover a refeição.')
    }
  }

  useEffect(() => {
    getMeal()
  }, [])

  return (
    <Container type={meal?.isOnDiet ? 'INSIDE' : 'OUTSIDE'}>
      <Header title="Refeição" />

      <Content>
        <Title>{meal?.name}</Title>

        <Description>{meal?.description}</Description>

        <Label>Data e hora</Label>
        <Text>
          {meal?.date} às {meal?.hour}
        </Text>

        <Badge type={meal?.isOnDiet ? 'INSIDE' : 'OUTSIDE'} />

        <ButtonControls>
          <Button
            icon={PhosphorIcons.PencilSimpleLine}
            title="Editar refeição"
            onPress={() => navigation.navigate('edit', { id: meal!.id })}
          />

          <Button
            mode="OUTLINED"
            style={{ marginTop: 9 }}
            icon={PhosphorIcons.Trash}
            title="Excluir refeição"
            onPress={handleRemoveMeal}
          />
        </ButtonControls>
      </Content>
    </Container>
  )
}
