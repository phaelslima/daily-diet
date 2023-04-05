import { ViewProps } from 'react-native'

import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import { LinearGradient } from 'expo-linear-gradient'

import { useTheme } from 'styled-components/native'

import { Container, Description, Title } from './styles'

type Props = ViewProps & {
  title: number
  description: string
  visible?: boolean
  shimmerColors?: string[]
}

export function StatisticCard({
  title,
  description,
  visible = true,
  shimmerColors,
  ...rest
}: Props) {
  const theme = useTheme()

  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)

  return (
    <Container {...rest}>
      <ShimmerPlaceholder
        visible={visible}
        height={24}
        width={60}
        location={[0.3, 1]}
        shimmerColors={
          shimmerColors || [theme.COLORS.GRAY_600, theme.COLORS.GRAY_500]
        }
        shimmerStyle={[{ borderRadius: 16, marginBottom: 15 }]}
      >
        <Title>{title}</Title>
      </ShimmerPlaceholder>

      <Description>{description}</Description>
    </Container>
  )
}
