import { useNavigation } from '@react-navigation/native'

import * as PhosphorIcons from 'phosphor-react-native'

import { Badge } from '@components/Badge'
import { Button } from '@components/Button'

import {
  BackButton,
  ButtonControls,
  Container,
  Content,
  Description,
  Text,
  Header,
  HeaderTitle,
  Icon,
  Label,
  Title,
} from './styles'

export function MealDetails() {
  const nagivation = useNavigation()

  function handleGoBack() {
    nagivation.goBack()
  }

  return (
    <Container type="INSIDE">
      <Header type="INSIDE">
        <BackButton onPress={handleGoBack}>
          <Icon />
        </BackButton>

        <HeaderTitle>Refeição</HeaderTitle>
      </Header>

      <Content>
        <Title>Sanduíche</Title>

        <Description>
          Sanduíche de pão integral com atum e salada de alface e tomate
        </Description>

        <Label>Data e hora</Label>
        <Text>12/08/2022 às 20:00</Text>

        <Badge type="INSIDE" />

        <ButtonControls>
          <Button
            icon={PhosphorIcons.PencilSimpleLine}
            title="Editar refeição"
          />

          <Button
            mode="OUTLINED"
            style={{ marginTop: 9 }}
            icon={PhosphorIcons.Trash}
            title="Excluir refeição"
          />
        </ButtonControls>
      </Content>
    </Container>
  )
}
