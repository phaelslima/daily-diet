import { Header } from '@components/Header'
import { PercentResume } from '@components/PercentResume'

import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <Header />

      <PercentResume />
    </Container>
  )
}
