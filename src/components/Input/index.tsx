import { StyleProp, TextInputProps, TextStyle, ViewStyle } from 'react-native'
import { Container, Feedback, Input as TextInput, Title } from './styles'

type Props = TextInputProps & {
  title: string
  inputStyle?: StyleProp<TextStyle>
  style?: StyleProp<ViewStyle>
  valid?: boolean
  feedback?: string
}

export function Input({
  title,
  style,
  inputStyle,
  valid,
  feedback,
  ...rest
}: Props) {
  return (
    <Container style={style}>
      <Title>{title}</Title>
      <TextInput {...rest} style={inputStyle} />
      <Feedback valid={valid}>{feedback}</Feedback>
    </Container>
  )
}
