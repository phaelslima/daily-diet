import styled from 'styled-components/native'

export const Container = styled.View``

export const Title = styled.Text`
  margin-bottom: 8px;

  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;

  line-height: 20.8px;

  color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const SectionTitle = styled.Text`
  padding-top: 32px;
  padding-bottom: 8px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;

  line-height: 23.4px;

  color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const Separator = styled.View`
  width: 100%;
  height: 8px;
`
