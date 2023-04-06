import styled from 'styled-components/native'

import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`

export const Context = styled.View`
  flex: 1;

  margin-top: -17px;
  padding: 40px 24px 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 20px;
`

export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`

export const Row = styled.View`
  flex-direction: row;
`

export const RadioGroup = styled.View`
  margin-bottom: 24px;
`

export const RadioGroupTitle = styled.Text`
  margin-bottom: 8px;

  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;

  line-height: 18.2px;

  color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const RadioGroupFeedback = styled.Text<{ valid?: boolean }>`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;

  line-height: 20.8px;

  color: ${({ theme, valid }) =>
    valid ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`
