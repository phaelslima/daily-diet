import styled, { css } from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

export type RadioTypeStyleProps = 'POSITIVE' | 'NEGATIVE'

type Props = {
  type: RadioTypeStyleProps
  isActive?: boolean
}

export const Container = styled(TouchableOpacity)<Props>`
  flex-direction: row;
  flex-shrink: 1;

  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 16px 0;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 6px;

  ${({ theme, type, isActive }) =>
    isActive &&
    css({
      backgroundColor:
        type === 'POSITIVE' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT,
      borderWidth: 1,
      borderColor:
        type === 'POSITIVE' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
    })}
`

export const Point = styled.View<Props>`
  width: 8px;
  height: 8px;

  margin-right: 5px;

  background-color: ${({ theme, type }) =>
    type === 'POSITIVE' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  border-radius: 999px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;

  line-height: 18.2px;

  color: ${({ theme }) => theme.COLORS.GRAY_100};
`
