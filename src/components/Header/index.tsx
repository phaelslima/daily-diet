import { useNavigation } from '@react-navigation/native'

import { Container, BackButton, Icon, Title } from './styles'

type Props = {
  title: string
}

export function Header({ title }: Props) {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }
  return (
    <Container>
      <BackButton onPress={handleGoBack}>
        <Icon />
      </BackButton>

      <Title>{title}</Title>
    </Container>
  )
}
