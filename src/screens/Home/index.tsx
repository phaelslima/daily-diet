import { Meals } from '@components/Meals'
import { PercentResume } from '@components/PercentResume'

import Logo from '@assets/logo.svg'

import { Avatar, Container, Header } from './styles'

export function Home() {
  return (
    <Container>
      <Header>
        <Logo />
        <Avatar />
      </Header>

      <PercentResume />

      <Meals />
    </Container>
  )
}
