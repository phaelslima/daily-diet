import styled from 'styled-components/native'

import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeft } from 'phosphor-react-native'

export type StatisticsTypeStyleProps = 'INSIDE' | 'OUTSIDE' | 'DEFAULT'

type Props = {
  type: StatisticsTypeStyleProps
}

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;

  background-color: ${({ theme, type }) =>
    type === 'INSIDE'
      ? theme.COLORS.GREEN_LIGHT
      : type === 'OUTSIDE'
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_500};
`

export const Header = styled.View`
  justify-content: center;
  align-items: center;
  padding: 34px 0;
`

export const Button = styled(TouchableOpacity)`
  position: absolute;
  top: 20px;
  left: 25px;
`

export const Icon = styled(ArrowLeft).attrs({
  size: 24,
})``

export const Title = styled.Text`
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

export const Content = styled.View`
  flex: 1;
  padding: 0 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 20px;
`

export const ContentTitle = styled.Text`
  padding-top: 33px;
  padding-bottom: 23px;

  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;

  line-height: 18.2px;

  color: ${({ theme }) => theme.COLORS.GRAY_100};
  text-align: center;
`

export const Row = styled.View`
  flex-direction: row;
`
