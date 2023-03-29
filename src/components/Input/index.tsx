import { StyleProp, TextInputProps, TextStyle, ViewStyle } from 'react-native'
import { Container, Input as TextInput, Title } from './styles'

type Props = TextInputProps & {
  title: string
  inputStyle?: StyleProp<TextStyle>
  style?: StyleProp<ViewStyle>
}

export function Input({ title, style, inputStyle, ...rest }: Props) {
  return (
    <Container style={style}>
      <Title>{title}</Title>
      <TextInput {...rest} style={inputStyle} />
    </Container>
  )
}
