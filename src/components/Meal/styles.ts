import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

type CircleProps = {
  isOnDiet: boolean
}

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 16px 12px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
`

export const Time = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;

  line-height: 15.6px;

  color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const Divider = styled.View`
  width: 1px;
  height: 14px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};

  margin: 0 12px;
`

export const Title = styled.Text`
  flex: 1;
  margin-right: 12px;

  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;

  line-height: 20.8px;

  color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const Circle = styled.View<CircleProps>`
  background-color: ${({ theme, isOnDiet }) =>
    isOnDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
  border-radius: 999px;
  width: 15px;
  height: 15px;
`
