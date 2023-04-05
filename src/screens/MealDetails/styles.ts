import styled from 'styled-components/native'

import { SafeAreaView } from 'react-native-safe-area-context'

export type TypeStyleProps = 'INSIDE' | 'OUTSIDE'

type Props = {
  type: TypeStyleProps
}

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background-color: ${({ theme, type }) =>
    type === 'INSIDE' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const Content = styled.View`
  flex: 1;

  margin-top: -20px;
  padding: 40px 24px 24px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 20px;
`

export const Title = styled.Text`
  margin-bottom: 8px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 20px;
  line-height: 26px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  line-height: 20.8px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const Label = styled.Text`
  margin-top: 24px;
  margin-bottom: 8px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  line-height: 18.2px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const Text = styled.Text`
  margin-bottom: 24px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  line-height: 20.8px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const ButtonControls = styled.View`
  flex: 1;
  justify-content: flex-end;
`
