import { View } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(View)`
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  padding: 16px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 8px;

  flex-shrink: 1;
`

export const Title = styled.Text`
  margin-bottom: 8px;

  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;

  line-height: 31.2px;

  color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;

  line-height: 18.2px;
  text-align: center;

  color: ${({ theme }) => theme.COLORS.GRAY_200};
`
