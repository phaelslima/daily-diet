import { BadgeTypeStyleProps, Container, Point, Title } from './styles'

type Props = {
  type: BadgeTypeStyleProps
}

export function Badge({ type }: Props) {
  return (
    <Container>
      <Point type={type} />
      <Title>{type === 'INSIDE' ? 'dentro da dieta' : 'fora da dieta'}</Title>
    </Container>
  )
}
