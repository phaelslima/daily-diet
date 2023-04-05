import { ActivityIndicator } from 'react-native'

import { useTheme } from 'styled-components/native'

import { Container } from './styles'

export function Loading() {
  const { COLORS } = useTheme()

  return (
    <Container>
      <ActivityIndicator size="large" color={COLORS.GRAY_400} />
    </Container>
  )
}
