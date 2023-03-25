import { Header } from '@components/Header'
import { Meals } from '@components/Meals'
import { PercentResume } from '@components/PercentResume'

import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <Header />

      <PercentResume />

      <Meals />
    </Container>
  )
}
