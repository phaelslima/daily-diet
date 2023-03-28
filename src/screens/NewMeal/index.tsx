import { useNavigation } from '@react-navigation/native'

import { Button } from '@components/Button'

import { BackButton, Container, Context, Header, Icon, Title } from './styles'

export function NewMeal() {
  const navigation = useNavigation()

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon />
        </BackButton>

        <Title>Nova refeição</Title>
      </Header>

      <Context>
        <Button title="Cadastrar refeição" />
      </Context>
    </Container>
  )
}
