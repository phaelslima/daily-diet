import { TouchableOpacityProps } from 'react-native'

import { Container, Point, RadioTypeStyleProps, Title } from './styles'

type Props = TouchableOpacityProps & {
  type: RadioTypeStyleProps
  title: string
  isActive?: boolean
}

export function Radio({ type, title, isActive, ...rest }: Props) {
  return (
    <Container {...rest} type={type} isActive={isActive}>
      <Point type={type} />
      <Title>{title}</Title>
    </Container>
  )
}
