import styled from 'styled-components/native'

export const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.8);
  align-items: center;
  justify-content: center;
`

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 8px;
  padding: 24px;
  padding-top: 40px;
  width: 80%;
`

export const Title = styled.Text`
  margin-bottom: 32px;

  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;

  text-align: center;
  line-height: 23.4px;

  color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const Footer = styled.View`
  justify-content: center;
  flex-direction: row;
`
