import styled from 'styled-components/native'

export type BadgeTypeStyleProps = 'INSIDE' | 'OUTSIDE'

type Props = {
  type: BadgeTypeStyleProps
}

export const Container = styled.View`
  align-items: center;
  align-self: flex-start;

  flex-direction: row;
  padding: 8px 16px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 1000px;
`

export const Point = styled.View<Props>`
  width: 8px;
  height: 8px;

  margin-right: 8px;

  background-color: ${({ theme, type }) =>
    type === 'INSIDE' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  border-radius: 999px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  line-height: 18.2px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`
