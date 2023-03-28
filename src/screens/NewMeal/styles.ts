import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeft } from 'phosphor-react-native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 93px;
  padding: 0 14px 17px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`

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

export const Context = styled.View`
  flex: 1;

  margin-top: -17px;
  padding: 40px 24px 24px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 20px;
`
