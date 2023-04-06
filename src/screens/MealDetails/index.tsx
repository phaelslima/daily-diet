import { useEffect, useState } from 'react'
import { Alert as RNAlert } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import * as PhosphorIcons from 'phosphor-react-native'

import { Alert } from '@components/Alert'
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
  const [modalVisible, setModalVisible] = useState(false)

  async function getMeal() {
    const meal = await mealGetById(params.id)
    setMeal(meal)
  }

  async function handleRemoveMeal() {
    try {
      await mealRemoveById(params.id)
      setModalVisible(false)
      navigation.goBack()
    } catch (error) {
      RNAlert.alert('Remover Refeição', 'Não foi possível remover a refeição.')
    }
  }

  function handleOpenModal() {
    setModalVisible(true)
  }

  function handleCloseModal() {
    setModalVisible(false)
  }

  useEffect(() => {
    getMeal()
  }, [])

  return (
    <>
      <Alert
        visible={modalVisible}
        onCancel={handleCloseModal}
        onRemove={handleRemoveMeal}
      />

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
              onPress={handleOpenModal}
            />
          </ButtonControls>
        </Content>
      </Container>
    </>
  )
}
