import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

export const Container = styled(TouchableOpacity)`
  height: 50px;
  padding: 16px 24px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 6px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`
