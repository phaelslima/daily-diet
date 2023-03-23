import styled from 'styled-components/native'
import { UserCircle } from 'phosphor-react-native'

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Avatar = styled(UserCircle).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_200,
  size: 45,
  weight: 'fill',
}))``
