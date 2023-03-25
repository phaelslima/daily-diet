import { TouchableOpacityProps } from 'react-native'

import { Container, Title } from './styles'

type Props = TouchableOpacityProps & {
  title: string
  icon?: JSX.Element
}

export function Button({ icon, title, ...rest }: Props) {
  return (
    <Container {...rest}>
      {icon}
      <Title>{title}</Title>
    </Container>
  )
}
