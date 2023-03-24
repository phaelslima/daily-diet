import { Container, Description, Icon, Percent } from './styles'

export function PercentResume() {
  const percent = 98.05
  const type = percent >= 50 ? 'POSITIVE' : 'NEGATIVE'

  return (
    <Container activeOpacity={0.8} type={type}>
      <Icon type={type} />
      <Percent>{percent}%</Percent>
      <Description>das refeições dentro da dieta</Description>
    </Container>
  )
}
