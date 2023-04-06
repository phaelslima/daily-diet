import styled, { css } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export type FeedbackTypeStyleProps = 'INSIDE' | 'OUTSIDE'

type Props = {
  type: FeedbackTypeStyleProps
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const Title = styled.Text<Props>`
  margin-bottom: 8px;

  ${({ theme, type }) =>
    css({
      fontFamily: theme.FONT_FAMILY.BOLD,
      fontSize: theme.FONT_SIZE.XL,
      color:
        type === 'INSIDE' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
    })};

  line-height: 31.2px;
`

export const Description = styled.Text`
  margin-bottom: 40px;

  ${({ theme }) =>
    css({
      fontFamily: theme.FONT_FAMILY.REGULAR,
      fontSize: theme.FONT_SIZE.MD,
      color: theme.COLORS.GRAY_100,
    })};

  text-align: center;
  line-height: 20.8px;
`

export const Strong = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const ImageContainer = styled.View`
  margin-bottom: 32px;
`
