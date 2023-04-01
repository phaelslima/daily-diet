import styled, { css } from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

export type ButtonTypeStyleProps = 'CONTAINED' | 'OUTLINED'

type Props = {
  mode: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 50px;
  padding: 16px 24px;

  background-color: ${({ theme, mode }) =>
    mode === 'CONTAINED' ? theme.COLORS.GRAY_200 : 'transparent'};
  border-radius: 6px;

  ${({ theme, mode }) =>
    mode === 'OUTLINED' &&
    css({
      borderColor: theme.COLORS.GRAY_100,
      borderWidth: 1,
    })};
`

export const Title = styled.Text<Props>`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  line-height: 18.2px;
  color: ${({ theme, mode }) =>
    mode === 'CONTAINED' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
`
