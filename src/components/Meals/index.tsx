import { SectionList } from 'react-native'
import { Plus } from 'phosphor-react-native'

import { Button } from '@components/Button'
import { Meal } from '@components/Meal'

import { SectionTitle, Separator, Title } from './styles'

export function Meals() {
  const DATA = [
    {
      title: '12.08.22',
      data: [
        {
          time: '20:00',
          title: 'X-tudo',
          isOnDiet: false,
        },
        {
          time: '16:00',
          title: 'Whey protein com leite',
          isOnDiet: true,
        },
        {
          time: '12:30',
          title: 'Salada cesar com frango grelhado',
          isOnDiet: true,
        },
        {
          time: '09:30',
          title: 'Vitamina de banana com abacate',
          isOnDiet: true,
        },
      ],
    },
  ]

  return (
    <>
      <Title>Refeições</Title>

      <Button
        icon={<Plus style={{ marginRight: 12 }} size={20} color="#FFF" />}
        title="Nova refeição"
      />

      <SectionList
        sections={DATA}
        keyExtractor={(_, index) => String(index)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Meal time={item.time} title={item.title} isOnDiet={item.isOnDiet} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <SectionTitle>{title}</SectionTitle>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
    </>
  )
}
