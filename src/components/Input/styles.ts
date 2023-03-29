import styled from 'styled-components/native'
import { TextInput, View } from 'react-native'

export const Container = styled(View)`
  flex-shrink: 1;

  width: 100%;

  margin-bottom: 24px;
`

export const Title = styled.Text`
  margin-bottom: 4px;

  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;

  line-height: 18.2px;

  color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const Input = styled(TextInput)`
  padding: 12px 18px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;

  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;

  line-height: 20.8px;

  color: ${({ theme }) => theme.COLORS.GRAY_100};
`
