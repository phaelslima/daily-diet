import { TouchableOpacityProps } from 'react-native'

import { Circle, Container, Divider, Time, Title } from './styles'

type Props = TouchableOpacityProps & {
  time: string
  title: string
  isOnDiet: boolean
}

export function Meal({ time, title, isOnDiet, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Time>{time}</Time>
      <Divider />
      <Title numberOfLines={1}>{title}</Title>
      <Circle isOnDiet={isOnDiet} />
    </Container>
  )
}
