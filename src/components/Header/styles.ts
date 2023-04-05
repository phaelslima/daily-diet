import styled from 'styled-components/native'

import { TouchableOpacity } from 'react-native'
import { ArrowLeft, UserCircle } from 'phosphor-react-native'

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 93px;
  padding: 0 14px 17px;
`

export const Avatar = styled(UserCircle).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_200,
  size: 45,
  weight: 'fill',
}))``

export const BackButton = styled(TouchableOpacity)`
  padding: 10px;
`

export const Icon = styled(ArrowLeft).attrs({
  size: 24,
})``

export const Title = styled.Text`
  flex: 1;

  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;

  text-align: center;
  line-height: 23.4px;

  color: ${({ theme }) => theme.COLORS.GRAY_100};

  transform: translateX(-12px);
`
