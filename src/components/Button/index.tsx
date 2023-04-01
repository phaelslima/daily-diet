import { TouchableOpacityProps } from 'react-native'
import { Icon as IconPhosphor } from 'phosphor-react-native'

import { useTheme } from 'styled-components/native'

import { ButtonTypeStyleProps, Container, Title } from './styles'

type Props = TouchableOpacityProps & {
  mode?: ButtonTypeStyleProps
  title: string
  icon?: IconPhosphor
}

export function Button({
  mode = 'CONTAINED',
  icon: Icon,
  title,
  ...rest
}: Props) {
  const { COLORS } = useTheme()
  return (
    <Container {...rest} mode={mode}>
      {Icon && (
        <Icon
          style={{ marginRight: 12 }}
          size={20}
          color={mode === 'CONTAINED' ? COLORS.WHITE : COLORS.GRAY_100}
        />
      )}
      <Title mode={mode}>{title}</Title>
    </Container>
  )
}
