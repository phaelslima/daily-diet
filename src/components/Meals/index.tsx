import { useCallback, useState } from 'react'
import { SectionList } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

import * as PhosphorIcons from 'phosphor-react-native'

import { mealsGetAll } from '@storage/meal/mealsGetAll'
import { MealStorageDTO } from '@storage/meal/MealStorageDTO'

import { Button } from '@components/Button'
import { ListEmpty } from '@components/ListEmpty'
import { Loading } from '@components/Loading'
import { Meal } from '@components/Meal'

import { toTimestamp } from '@utils/toTimestamp'

import { SectionTitle, Separator, Title } from './styles'

export type MealSectionsProps = { title: string; data: MealStorageDTO[] }

export function Meals() {
  const navigation = useNavigation()

  const [meals, setMeals] = useState<MealSectionsProps[]>([])
  const [loading, setLoading] = useState(false)

  async function fetchMeals() {
    const data = [] as MealSectionsProps[]

    const mealList = await mealsGetAll()
    setLoading(true)

    mealList.map((meal) => {
      const date = meal.date.replaceAll('/', '.')

      const isTitleExists = data.find((item) => item.title === date)

      if (!isTitleExists) {
        const newItem = {
          title: date,
          data: [meal],
        }

        data.push(newItem)
      } else {
        const index = data.findIndex((item) => item.title === date)

        data[index].data.push(meal)
      }
    })

    data.sort(function (a, b) {
      return toTimestamp(a.title) < toTimestamp(b.title)
        ? 1
        : toTimestamp(a.title) > toTimestamp(b.title)
        ? -1
        : 0
    })

    setMeals(data)
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals()
    }, [])
  )

  return (
    <>
      <Title>Refeições</Title>

      <Button
        icon={PhosphorIcons.Plus}
        title="Nova refeição"
        onPress={() => navigation.navigate('new')}
      />

      <SectionList
        sections={meals}
        keyExtractor={(_, index) => String(index)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Meal
            time={item.hour}
            title={item.name}
            isOnDiet={item.isOnDiet}
            onPress={() => navigation.navigate('details', { id: item.id })}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <SectionTitle>{title}</SectionTitle>
        )}
        ItemSeparatorComponent={() => <Separator />}
        stickySectionHeadersEnabled
        ListEmptyComponent={() =>
          !loading ? (
            <Loading />
          ) : (
            <ListEmpty message="Parece que você não possui refeições registradas, cadastre e comece a monitorar a sua dieta! ; )" />
          )
        }
        contentContainerStyle={[
          { paddingBottom: 24 },
          meals.length === 0 && { flex: 1 },
        ]}
      />
    </>
  )
}
