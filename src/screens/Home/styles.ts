import styled from 'styled-components/native'

import { SafeAreaView } from 'react-native-safe-area-context'
import { UserCircle } from 'phosphor-react-native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 16px 24px 0;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Avatar = styled(UserCircle).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_200,
  size: 45,
  weight: 'fill',
}))``
