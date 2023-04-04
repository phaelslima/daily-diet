import { ViewProps } from 'react-native'

import { Container, Description, Title } from './styles'

type Props = ViewProps & {
  title: number
  description: string
}

export function StatisticCard({ title, description, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  )
}
