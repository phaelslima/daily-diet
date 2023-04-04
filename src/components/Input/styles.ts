import styled from 'styled-components/native'
import { View } from 'react-native'
import MaskInput from 'react-native-mask-input'

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

export const Input = styled(MaskInput)`
  padding: 12px 18px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;

  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;

  line-height: 20.8px;

  color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const Feedback = styled.Text<{ valid?: boolean }>`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;

  line-height: 20.8px;

  color: ${({ theme, valid }) =>
    valid ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`
