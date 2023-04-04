import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { ArrowUpRight } from 'phosphor-react-native'

export type PercentResumeTypeStyleProps = 'INSIDE' | 'OUTSIDE'

type Props = {
  type: PercentResumeTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  justify-content: center;
  align-items: center;
  margin: 32px 0 40px;
  padding: 20px 16px;
  background-color: ${({ theme, type }) =>
    type === 'INSIDE' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 8px;
`

export const Percent = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;

  line-height: 41.6px;

  color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;

  line-height: 18.2px;

  color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const Icon = styled(ArrowUpRight).attrs<Props>(({ theme, type }) => ({
  color: type === 'INSIDE' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))<Props>`
  position: absolute;
  top: 13.25px;
  right: 13.25px;
`
